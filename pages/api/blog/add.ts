import { NextApiHandler, NextApiRequest } from 'next';
import connectDB from 'middleware/mongodb';
import Blog, { IBlog } from 'models/Blog';

interface BlogWithAdminId extends IBlog {
  adminId: string
};
interface NextApiAddBlogRequest extends NextApiRequest {
  body: BlogWithAdminId
}

const handler: NextApiHandler = async (req: NextApiAddBlogRequest, res) => {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Sorry, only POST requests please!' })
  }

  const { adminId } = req.body;
  try {
    if (adminId !== process.env.ADMIN_ID)
      return res.status(401).json('Not authorized!')

    const newBlog = new Blog(req.body);
    const savedBlog: IBlog = await newBlog.save();
    return res.status(200).json(savedBlog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);