import connectDB from '../../../middleware/mongodb';
import Project from '../../../models/Project';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(500).json({ message: 'Sorry, only POST requests please!' })
  }

  const { adminId } = req.body; 
  try {
    if (adminId === process.env.ADMIN_ID) {
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } else {
      res.status(403).json('Insufficient permission!')
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);