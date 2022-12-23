import Course from '../models/course.js';
import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createCourse = async (req, res) => {
  //Change this when you draw what you want it to say
  const course = req.body;
  const newCourse = new Course({
    ...course,
    hostId: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteCourse = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No course with that id`);
  await Course.findByIdAndRemove(_id);
  res.json({ message: 'Post deleted successfully' });
};
export const updateCourse = async (req, res) => {
  const { id: _id } = req.params;
  const course = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No course with that id');
  }
  const updatedCourse = await Course.findByIdAndUpdate(
    _id,
    { ...course, _id },
    {
      new: true,
    }
  );
  res.json(updatedCourse);
};

export default router;
