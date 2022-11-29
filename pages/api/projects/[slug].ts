import { NextApiHandler } from 'next';
import connectDB from 'middleware/mongodb';
import Project, { IProject } from 'models/Project';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'Sorry, only GET requests please!' })
  }

  const { slug } = req.query;
  try {
    const project = await Project.findOne<IProject>({ slug });
    if (!project)
      return res.status(404).json('Project not found!');

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);