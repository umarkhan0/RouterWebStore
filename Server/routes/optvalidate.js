import express from "express";
import OTP from "../models/otp.js";
import User from "../models/user.js";
import Jwt from 'jsonwebtoken';
import Joi from "joi";
import Temprary from "../models/temprayNotSing.js";
const router = express.Router();
router.post('/', async (req, res) => {
    const userSchema = Joi.object({
        OTP: Joi.string().required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
    });
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    try {
        const users = await Temprary.findOne({ email: req.body.email });
        const usersO = await OTP.findOne({ email: req.body.email });
        console.log(users);
        let verifyCode = usersO.otp;
        let usertypeOtp = req.body.OTP;
        console.log(verifyCode);
        if (verifyCode == usertypeOtp) {
            await Temprary.updateOne({ vrify: true })
            const token = Jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);
            await usersO.deleteOne({ email: req.body.email })
            let { name, email, password } = users
            const user = new User({ name, email, password, vrify: true });
            await user.save();
            res.status(200).send({ token: token });
        } else {
            res.status(400).send(false)
        };
    } catch (err) {
        const users = await Temprary.findOne({ email: req.body.email });
        let checkverify = users?.vrify;
        console.log(err);
        if (checkverify) {
            res.status(400).send({ message: "Already verified" })
        } else {
            res.status(400).send({ message: "Time out" })
        }
    }
});
export default router;