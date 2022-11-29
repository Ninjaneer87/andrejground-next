import { NextApiHandler, NextApiRequest } from 'next';
import connectDB from 'middleware/mongodb';
import Project, { IProject } from 'models/Project';

interface ProjectWithAdminId extends IProject {
  adminId: string
};
interface NextApiUpdateProjectRequest extends NextApiRequest {
  body: ProjectWithAdminId
}
const handler: NextApiHandler = async (req: NextApiUpdateProjectRequest, res) => {
  if (req.method !== 'PUT') {
    return res.status(500).json({ message: 'Sorry, only PUT requests please!' })
  }

  const { adminId } = req.body;
  const { id } = req.query;
  try {
    if (adminId !== process.env.ADMIN_ID)
      return res.status(401).json('Not authorized!')


    const project = await Project.findById<IProject>(id);
    if (!project)
      return res.status(404).json('Project not found!');

    await project.updateOne({ $set: req.body })
    return res.status(200).json("Project has been updated!");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);