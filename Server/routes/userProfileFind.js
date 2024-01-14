import express from "express";
import verifyToken from "../middlewere/verifyToken.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", verifyToken, async (request, response) => {
    const { authorization } = request.headers;
    const token = authorization?.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return response.status(404).send({ error: 'User not found' });
        }

        return response.status(200).send({ user });
    } catch (err) {
        return response.status(400).send({ error: 'Invalid token' });
    }
});

export default router;
