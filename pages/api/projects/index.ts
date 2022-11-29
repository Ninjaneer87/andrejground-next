import { NextApiHandler } from 'next';
import connectDB from 'middleware/mongodb';
import Project, { IProject } from 'models/Project';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'Only GET requests accepted here!' })
  }

  try {
    const projects = await Project.find<IProject>();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);