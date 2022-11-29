import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  userName: string;
  email: string;
  password: string;
  profileImage: string;
  isAdmin: boolean;
  isAvailable: boolean;
}

const UserSchema = new mongoose.Schema<IUser>({
  userName: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
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

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);