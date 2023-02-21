import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import mongoose from 'mongoose';
export const signIn = async (req, res) => {
  const { email, password, authType } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      if (authType === 'Google') {
        // Ako User pokusa Google signIn i nema acc kreira se novi
        const { firstName, lastName } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({
          email,
          password: hashedPassword,
          firstName: firstName,
          lastName: lastName,
          authType,
        });
        const token = jwt.sign(
          { email: result.email, id: result._id },
          process.env.JWT,
          {
            expiresIn: '1h',
          }
        );
        return res.status(200).json({ result, token });
      } else return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid password!' });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT,
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName, authType } =
    req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'User already exists.' });
    if (password !== confirmPassword)
      return res.status(400).json({ message: `Passwords don't match.` });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      authType,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
export const updateUserInfo = async (req, res) => {
  const { id: _id } = req.params;
  const userInfo = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No User with that id');
  }
  const updatedUserInfo = await User.findByIdAndUpdate(
    _id,
    { ...userInfo, userInfoWizardDone: true, updatedAt: Date.now(), _id },
    {
      new: true,
    }
  );
  res.json(updatedUserInfo);
};
