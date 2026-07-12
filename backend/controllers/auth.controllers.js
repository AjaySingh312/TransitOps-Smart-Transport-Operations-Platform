import { User } from "../models/user.models.js";
import apiError from "../utils/apiError.utils.js"
import apiResponse from "../utils/apiResponse.utils.js"
import jwt from "jsonwebtoken"

const userRegister = async (req, res) => {
    const { fullName, email, password, role } = req.body;

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existingUser) {
        throw new apiError(401, "User already exists!")
    }
    const user = await User.create({
        username,
        email,
        password,
        role
    })
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })

    
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    const userDetails = await User.findById(user._id).select(
        "-refreshToken -password  "
    )

    return res
        .status(200)
        .json(
            new apiResponse(200, { user: userDetails, accessToken }, "user registered successfully! verification email is send to your email.")
        )
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new apiError(401, "email and password is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new apiError(402, "user does not found");
    }
    const match = await user.isPasswordCorrect(password)
    if (!match) {
        throw new apiError(401, "invalid password")
    }
    if (user.isActive = false) {
        throw new apiError(401, "user is not active")
    }
    const refreshToken = user.generateRefreshToken()
    const accessToken = user.generateAccessToken()
    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res
        .status(200)
        .json(
            new apiResponse(200, accessToken, "user login successfull!")
        )

}

const RefreshAccessToken = async (req, res) => {
    const userRT = req.cookies.refreshToken;
    if (!userRT) {
        throw new apiError(401, "refresh token is required")
    }
    let decoded;
    try {
        decoded = jwt.verify(userRT, process.env.REFRESH_TOKEN_SECRET)
    } catch (err) {
        throw new apiError(401, "invalid or expired refresh token")
    }
    const user = await User.findById(decoded.id)
    if (!user) {
        throw new apiError(403, "user does not found")
    }
    const newAT = user.generateAccessToken()
    const newRT = user.generateRefreshToken()

    user.refreshToken = newRT 
    await user.save({ validateBeforeSave: false })

    res.clearCookie("refreshToken")
    res.cookie("refreshToken", newRT, {
        httpOnly: true,
        secure: false, // before production i have to change it to true;
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res
        .status(200)
        .json(
            new apiResponse(200, { accessToken: newAT }, "new Access Token is generated successfully")
        )
}

const userLogout = async (req, res) => {
    const userRT = req.cookies.refreshToken
    if (!userRT) {
        throw new apiError(401, "please provide refreshToken")
    }

    const user = await User.findById(req.user.id)
    if(!user){
        throw new apiError(400,"user not found")
    }
    user.refreshToken = undefined;
    await user.save({validateBeforeSave: false})

    res.clearCookie("refreshToken")

    return res
        .status(200)
        .json(
            new apiResponse(200, {}, "user logout successfull!")
        )

}

export {userRegister, userLogin,RefreshAccessToken, userLogout}