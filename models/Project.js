import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 3,
    max: 50,
    unique: false
  },
  description: {
    type: String,
    require: true,
    unique: false
  },
  projectType: {
    type: String,
    default: '',
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
    type: Array,
    default: [],
  },
  technologies: {
    type: Array,
    default: [],
  },
}
)

export default mongoose.model("Project", ProjectSchema);