import connectDB from '../../../../middleware/mongodb';
import Blog from '../../../../models/Blog';

const handler = async (req, res) => {
  if (req.method !== 'PUT') {
    res.status(500).json({ message: 'Sorry, only PUT requests please!' })
  }

  const { adminId } = req.body; 
  const { id } = req.query
  try {
    const blog = await Blog.findById(id);
    if (adminId === process.env.ADMIN_ID) {
      await blog.deleteOne()
      res.status(200).json("Blog has been deleted!");
    } else {
      res.status(403).json('Insufficient permission!')
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);