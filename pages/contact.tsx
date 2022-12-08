import React from "react";
import SendMessage from "@/components/pages/contact/SendMessage";
import Info from "@/components/pages/contact/Info";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | Contact</title>
        <meta name="description" content="Let's get in touch and build together. We can connect through email, linkedin, or through the message form provided on the page." />
        <link
          rel="canonical"
          href="https://andrejground.com/contact"
          key="canonical"
        />
      </Head>
      <Info />
      <SendMessage />
    </>
  );
};

export default Contact;
