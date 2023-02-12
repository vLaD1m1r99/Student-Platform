import mongoose from 'mongoose';
import Course from './course.js';
const userSchema = mongoose.Schema({
  id: String,
  authType: { type: String, default: null, enum: ['Google', 'Custom'] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
  phone: { type: Number, default: null },
  title: {
    type: String,
    enum: ['Student', 'Profesor', 'Guest'],
    default: 'Guest',
  },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: { type: Date, default: Date.now },
  about: { type: String, maxLength: 250, default: null },
  courses: [{ type: String, ref: Course }],
  rating: { type: Number, min: 1, max: 10, default: null },
});
export default mongoose.model('User', userSchema);
