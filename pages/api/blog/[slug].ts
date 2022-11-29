import { NextApiHandler } from 'next';
import connectDB from 'middleware/mongodb';
import Blog, { IBlog } from 'models/Blog';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'Sorry, only GET requests please!' })
  }

  const { slug } = req.query;
  try {
    const blog = await Blog.findOne<IBlog>({ slug });
    if (!blog)
      return res.status(404).json('Blog not found!');

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);