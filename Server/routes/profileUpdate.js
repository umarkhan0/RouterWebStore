// app.js
import express from 'express';
import upload from "../middlewere/multer.js";
import verifyToken from '../middlewere/verifyToken.js';
import { uploadToCloudinary } from '../Utills/uploder.js';
import User from '../models/SingUp.js';
import jwt from "jsonwebtoken";
import Joi from 'joi';
import bcrypt from "bcrypt";
const router = express.Router();

router.put('/', verifyToken, upload.single('image'), async (req, res) => {
  const { authorization } = req.headers;
  const { name, oldpassword, newPassword } = req.body;
  const token = authorization?.split(" ")[1];
  // console.log(req);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email });

    if (oldpassword) {
      const passwordMatch = await bcrypt.compare(oldpassword, user.password);
      if (passwordMatch) {
        if (newPassword.length > 6) {
          user.password = await bcrypt.hash(newPassword, 10);
          await user.save();
        } else {
          return res.status(401).json({
            message: "At least 6 characters required",
          });
        }
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
    if (name ) {
      if(name.length > 6){
      user.name = name;
      }else{
        return res.status(401).json({
          message: "Name least 6 characters required",
        });
      }
    }

    await user.save();
    res.status(200).json({
      success: true,
      message: "Uploaded!",
      Profile: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unauthorized",
    });
  }
});

export default router;
