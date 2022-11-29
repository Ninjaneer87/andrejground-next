import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const connectDB = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState)
    return handler(req, res);

  await mongoose.connect(process.env.MONGO_URL!);
  return handler(req, res);
};

export default connectDB;