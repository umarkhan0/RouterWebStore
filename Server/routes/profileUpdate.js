// app.js
import express from 'express';
import upload from "../middlewere/multer.js";
import verifyToken from '../middlewere/verifyToken.js';
import { uploadToCloudinary } from '../Utills/uploder.js';
import User from '../models/user.js';
import jwt from "jsonwebtoken";
import Joi from 'joi';
import bcrypt from "bcrypt";
const router = express.Router();

router.put('/', verifyToken, upload.single('image'), async (req, res) => {
  const { authorization } = req.headers;
  const { name, oldpassword, newPassword } = req.body;
  const token = authorization?.split(" ")[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email });

    if (oldpassword) {
      const passwordMatch = await bcrypt.compare(oldpassword, user.password);
console.log(passwordMatch);
      if (passwordMatch) {
        user.password = newPassword;
      } else {
        return res.status(401).json({
          message: "Old password does not match",
        });
      }
    }

    const imageUrl = req.file ? await uploadToCloudinary(req.file) : null;
    if (imageUrl) {
      user.profileImage = imageUrl;
    }

    if (name) {
      user.name = name;
    }

    await user.save();
    res.status(200).json({
      success: true,
      message: "Uploaded!",
      Profile: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unauthorized",
    });
  }
});



export default router;