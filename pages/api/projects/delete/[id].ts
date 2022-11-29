import { NextApiHandler, NextApiRequest } from 'next';
import connectDB from 'middleware/mongodb';
import Project, { IProject } from 'models/Project';

interface NextApiDeleteProjectRequest extends NextApiRequest {
  body: {
    adminId: string;
  }
}
const handler: NextApiHandler = async (req: NextApiDeleteProjectRequest, res) => {
  if (req.method !== 'PUT') {
    return res.status(500).json({ message: 'Sorry, only PUT requests please!' })
  }

  const { adminId } = req.body;
  const { id } = req.query
  try {
    if (adminId !== process.env.ADMIN_ID)
      return res.status(401).json('Not authorized!');

    const project = await Project.findById<IProject>(id);
    if (!project)
      return res.status(404).json('Project not found!');

    await project.deleteOne()
    return res.status(200).json("Project has been deleted!");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);