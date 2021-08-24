import connectDB from '../../../middleware/mongodb';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Sorry, only POST requests please!' })
  }

  const { adminId } = req.body; 
  try {
    if (adminId === process.env.ADMIN_ID) {
      const newBlog = new Blog(req.body);
      const savedBlog = await newBlog.save();
      res.status(200).json(savedBlog);
    } else {
      res.status(403).json('Insufficient permission!')
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);