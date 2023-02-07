import mongoose from 'mongoose';
const courseSchema = mongoose.Schema({
  id: { type: String },
  hostId: { type: String, required: true },
  hostName: { type: String, required: true },
  courseName: { type: String, required: true },
  courseTags: [{ type: String, required: true }],
  // participantsId: [{ type: String, default: [] }],
  courseFee: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: { type: Date, default: Date.now },
  reviews: [
    {
      rating: { type: Number, min: 1, max: 10 },
      message: String,
    },
  ],
});
export default mongoose.model('Course', courseSchema);
