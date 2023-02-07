import mongoose from 'mongoose';
import Course from './course.js';
const userSchema = mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  role: { type: String, enum: ['User', 'Admin'] },
  phone: Number,
  title: { type: String, enum: ['Student', 'Profesor'] },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: { type: Date, default: Date.now },
  about: { type: String, maxLength: 250 },
  courses: [{ type: String, ref: Course }],
  rating: { type: Number, min: 1, max: 10, default: 0 },
});
export default mongoose.model('User', userSchema);
