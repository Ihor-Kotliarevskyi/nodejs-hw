import createHttpError from 'http-errors';
import { updateUserAvatarUrl } from '../services/userService.js';
import { User } from '../models/user.js';

export const updateUserAvatar = async (req, res) => {
  if (!req.file) {
    throw createHttpError(400, 'No file');
  }

  const avatarUrl = await updateUserAvatarUrl(req.user._id, req.file.buffer);

  res.status(200).json({ url: avatarUrl });
};

export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

export const updateMe = async (req, res) => {
  const { username, email } = req.body;
  const update = {};
  if (username !== undefined) update.username = username;
  if (email !== undefined) update.email = email;

  const user = await User.findByIdAndUpdate(req.user._id, update, {
    new: true,
  });
  res.status(200).json(user);
};
