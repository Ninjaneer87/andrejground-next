import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 3,
    max: 200,
  },
  content: {
    type: String,
    require: true,
  },
  subtitle: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
    default: 'Andrej',
  },
  image: {
    type: String,
    default: '',
    require: true,
  },
  slug: {
    type: String,
    default: '',
    unique: true.valueOf,
    require: true,
  },
}, {
  timestamps: true
}
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);