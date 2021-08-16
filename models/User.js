import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    min: 3,
    max: 50,
    unique: true
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    require: true,
    min: 6,
  },
  profileImage: {
    type: String,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model("User", UserSchema);