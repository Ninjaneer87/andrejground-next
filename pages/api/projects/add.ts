import { NextApiHandler, NextApiRequest } from 'next';
import connectDB from 'middleware/mongodb';
import Project, { IProject } from 'models/Project';

interface ProjectWithAdminId extends IProject {
  adminId: string
};
interface NextApiAddProjectRequest extends NextApiRequest {
  body: ProjectWithAdminId
}

const handler: NextApiHandler = async (req: NextApiAddProjectRequest, res) => {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Sorry, only POST requests please!' })
  }

  const { adminId } = req.body;
  try {
    if (adminId !== process.env.ADMIN_ID)
      return res.status(401).json('Not authorized!')

    const newProject = new Project(req.body);
    const savedProject: IProject = await newProject.save();
    return res.status(200).json(savedProject);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default connectDB(handler);