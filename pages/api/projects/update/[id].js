import connectDB from '../../../../middleware/mongodb';
import Project from '../../../../models/Project';

const handler = async (req, res) => {
  if(req.method !== 'PUT') {
    res.status(500).json({message: 'Sorry, only PUT requests please!'})
  }
  
  const { adminId } = req.body; 
  const { id } = req.query
  try {
    const project = await Project.findById(id);
    if (adminId === process.env.ADMIN_ID) {
      await project.updateOne({$set: req.body})
      res.status(200).json("Project has been updated!");
    } else {
      res.status(403).json('Insufficient permission!')
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);