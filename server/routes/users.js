import express from 'express';
import { signIn, signUp, updateUserInfo } from '../controllers/user.js';
const router = express.Router();

//localhost:5000/
router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.patch('/updateUserInfo/:id', updateUserInfo);
export default router;
