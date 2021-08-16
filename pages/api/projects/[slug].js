import connectDB from '../../../middleware/mongodb';
import Project from '../../../models/Project';

const handler = async (req, res) => {
  if(req.method !== 'GET') {
    res.status(500).json({message: 'Sorry, only GET requests please!'})
  }
  
  const { slug } = req.query
  try {
    const project = await Project.findOne({ slug });
    !project && res.status(404).json('Project not found!');

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);