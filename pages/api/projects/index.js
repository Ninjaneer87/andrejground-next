import connectDB from '../../../middleware/mongodb';
import Project from '../../../models/Project';

const handler = async (req, res) => {
  if(req.method !== 'GET') {
    res.status(500).json({message: 'Sorry, only GET requests please!'})
  }
  
  try {
    console.log('requested projects GET')
    const projects = await Project.find();
    projects.length < 1 && res.status(404).json('There are no projects!');

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);