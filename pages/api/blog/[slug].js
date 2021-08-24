import connectDB from '../../../middleware/mongodb';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
  if(req.method !== 'GET') {
    res.status(500).json({message: 'Sorry, only GET requests please!'})
  }
  
  const { slug } = req.query
  try {
    const blog = await Blog.findOne({ slug });
    !blog && res.status(404).json('Blog not found!');

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);