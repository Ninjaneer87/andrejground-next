import connectDB from '../../../middleware/mongodb';
import Blog from '../../../models/Blog';

const handler = async (req, res) => {
  if(req.method !== 'GET') {
    res.status(500).json({message: 'Only GET requests accepted here!'})
  }
  
  try {
    console.log('requested blogs GET')
    const blogs = await Blog.find();
    blogs.length < 1 && res.status(404).json('There are no blogs!');

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);