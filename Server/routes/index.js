import express from "express";
const router  = express.Router();
import postReq from "./signUp.js";
import profileGet from "./userProfileFind.js"
import putReq from "./login.js";
import updateProfile from "./profileUpdate.js"
import verify from "./optvalidate.js";
import resendOtp from "./reSentOtp.js";
import postProdut from "./postAllProduct.js"

// import Upload from "./upload.js"
router.use("/login" , putReq);
router.use("/updateProfile" , updateProfile);
router.use("/verify" , verify);
router.use("/signup" , postReq);
// console.log(req.url);
router.use("/postProduct" , postProdut);
router.use("/reSentotp" , resendOtp);
router.use("/profileGet" , profileGet);
export default router;