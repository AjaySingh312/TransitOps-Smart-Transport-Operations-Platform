import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken: String,
        role: {
            type: String,
            enum: [
                "Fleet Manager",
                "Safety Officer",
                "Financial Analyst",
                "Driver",
            ],
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },

    
    }, { timestamps: true }
)

userSchema.pre("save", async function () {
    if (!this.isModified('password')) return;
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch (err) {
        console.error(" hashing password is failed", err);
    }
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '7d'
        }
    )
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
            role: this.role,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '15m'
        }
    )
}

export const User = mongoose.model("User", userSchema)