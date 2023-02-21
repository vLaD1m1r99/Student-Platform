import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
  id: String,
  authType: { type: String, default: 'Custom', enum: ['Google', 'Custom'] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
  phone: { type: Number, default: null },
  address: { type: String, default: null, maxLength: 50 },
  schoolName: { type: String, default: null, maxLength: 50 },
  schoolYear: { type: String, default: null, maxLength: 50 },
  facebook: { type: String, maxLength: 100, default: null },
  instagram: { type: String, maxLength: 100, default: null },
  linkedIn: { type: String, maxLength: 100, default: null },
  zip: { type: Number, default: null },
  city: { type: String, default: null },
  title: {
    type: String,
    enum: ['Student', 'Profesor', 'Guest'],
    default: 'Guest',
  },
  userInfoWizardDone: {
    type: Boolean,
    default: false,
  },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: { type: Date, default: Date.now },
  about: { type: String, maxLength: 500, default: null },
  photo: { type: String, default: null },
  rating: { type: Number, min: 1, max: 10, default: null },
});
export default mongoose.model('User', userSchema);
