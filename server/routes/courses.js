import express from 'express';
import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courses.js';
import auth from '../middleware/auth.js';
const router = express.Router();
router.get('/', auth, getCourses);
router.post('/', auth, createCourse);
router.patch('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
export default router;
