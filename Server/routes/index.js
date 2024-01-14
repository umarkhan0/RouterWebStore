import express from "express";
const router  = express.Router();
import postReq from "./signUp.js";
import profileGet from "./userProfileFind.js"
import putReq from "./login.js";
import verify from "./optvalidate.js";
import resendOtp from "./reSentOtp.js"
router.use("/login" , putReq);
// router.use("/secStep" , secStep);
router.use("/verify" , verify);
router.use("/signup" , postReq);
// console.log(req.url);
// router.use("/allpost" , alldata);
router.use("/reSentotp" , resendOtp);
router.use("/profileGet" , profileGet);
export default router;