import { NextApiHandler } from 'next';
import connectDB from 'middleware/mongodb';
import Blog, { IBlog } from 'models/Blog';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'Only GET requests accepted here!' })
  }

  try {
    const blogs = await Blog.find<IBlog>();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);