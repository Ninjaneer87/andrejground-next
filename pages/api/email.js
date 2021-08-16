
const nodemailer = require('nodemailer');

const addLineBreaks = (text) => {
  let textAreaString = text;
  textAreaString = textAreaString.replace(/\n\r/g, "<br />");
  textAreaString = textAreaString.replace(/\n/g, "<br />");

  return textAreaString;
}

async function sendEmail(req, res) {
  const output = `
    <p style="color: grey;">You have a new contact request</p>
    <h3>CONTACT DETAILS:</h3>
    <ul style="list-style: none;">
      <li>FULL NAME: <strong>${req.body.fullName}</strong></li>
      <li>SENDER: <strong>${req.body.email}</strong></li>
      <li>SUBJECT: <strong>${req.body.subject}</strong></li>
    </ul>
    <h3>MESSAGE:</h3>
    <div>${addLineBreaks(req.body.message)}</div>
  `;

  const emailHost = 'apaone.mysafeservers.com';
  const emailPort = 587;
  const emailUser = 'contact@andrejground.com';
  const emailPass = 'uncOsfclR4';

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    tls: {
      rejectUnauthorized: false // disable blocking from localhost
    }
  });

  // send mail with defined transport object
  // let info = 
  if (req.body.fullName !== '' && req.body.email !== '' && req.body.subject !== '' && req.body.message !== '')
    await transporter.sendMail({
      from: `"AndrejGround" <${emailUser}>`, // sender address
      to: "contact@andrejground.com", // list of receivers
      subject: "New message at AndrejGround", // Subject line
      text: "Excellent!", // plain text body
      html: output, // html body
    });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.json({ message: 'Email has been sent!' })
};

export default sendEmail;