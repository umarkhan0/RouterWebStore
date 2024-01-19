// app.js
import express from 'express';
import cloudinary from 'cloudinary';
// import multer from 'multer';
import upload from "../middlewere/multer.js"
const router = express.Router();
import verifyToken from '../middlewere/verifyToken.js';
// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true,
  });

   router.post('/upload', verifyToken ,  upload.single('image'), function (req, res) {
    cloudinary.uploader.upload(req.file.path, function (result, err){
     res.status(200).json({
        success: true,
        message:"Uploaded!",
      })
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error"
        })
      }
  
     
    })
  });
  
export default  router;