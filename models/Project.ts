import mongoose from 'mongoose';

export interface IProject extends mongoose.Document {
  title: string;
  description: string;
  projectType: 'work' | 'practice';
  dataSource: string;
  sideNote: string;
  image: string;
  siteLink: string;
  codeLink: string;
  slug: string;
  completedAt: string;
  features: string[];
  technologies: string[];
}

const ProjectSchema = new mongoose.Schema<IProject>({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  projectType: {
    type: String,
    default: 'practice',
  },
  dataSource: {
    type: String,
    default: '',
  },
  sideNote: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  siteLink: {
    type: String,
    default: '',
  },
  codeLink: {
    type: String,
    default: '',
  },
  slug: {
    type: String,
    default: '',
    unique: true
  },
  completedAt: {
    type: String,
    default: '',
  },
  features: {
    type: [String],
  },
  technologies: {
    type: [String],
  },
}
)

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);