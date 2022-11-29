import { NextApiHandler, NextApiRequest } from 'next';
import connectDB from 'middleware/mongodb';
import Blog, { IBlog } from 'models/Blog';

interface NextApiDeleteBlogRequest extends NextApiRequest {
  body: {
    adminId: string;
  }
}
const handler: NextApiHandler = async (req: NextApiDeleteBlogRequest, res) => {
  if (req.method !== 'PUT') {
    return res.status(500).json({ message: 'Sorry, only PUT requests please!' })
  }

  const { adminId } = req.body;
  const { id } = req.query
  try {
    if (adminId !== process.env.ADMIN_ID)
      return res.status(401).json('Not authorized!');

    const blog = await Blog.findById<IBlog>(id);
    if (!blog)
      return res.status(404).json('Blog not found!');

    await blog.deleteOne()
    return res.status(200).json("Blog has been deleted!");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);