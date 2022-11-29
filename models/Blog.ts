import mongoose from 'mongoose';

export interface IBlog extends mongoose.Document {
  title: string;
  content: string;
  subtitle: string;
  author: string;
  image: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new mongoose.Schema<IBlog>({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 200,
  },
  content: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: 'Andrej',
  },
  image: {
    type: String,
    default: '',
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
}, {
  timestamps: true
}
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);