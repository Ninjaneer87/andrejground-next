import connectDB from '../../../../middleware/mongodb';
import Project from '../../../../models/Project';

const handler = async (req, res) => {
  if(req.method !== 'PUT') {
    res.status(500).json({message: 'Sorry, only PUT requests please!'})
  }
  
  const isAdmin = true; //change to jwt later
  const { id } = req.query
  try {
    const project = await Project.findById(id);
    if(isAdmin) {
      await project.deleteOne()
      res.status(200).json("Project has been deleted!");
    } else {
      res.status(403).json('Insufficient permission!')
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default connectDB(handler);