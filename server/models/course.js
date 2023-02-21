import mongoose, { Schema } from 'mongoose';
const courseSchema = mongoose.Schema({
  id: String,
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
  host: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
export default mongoose.model('Course', courseSchema);
