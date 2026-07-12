import { User } from "../models/user.models.js";
import apiError from "../utils/apiError.utils.js";
import jwt from "jsonwebtoken"

const verifyAT = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        throw new apiError(401,"provide authorization token")
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = decoded;
        next()
    } catch (err) {
        throw new apiError(401,"invalid or expired access token")
    }
}

export default verifyAT;