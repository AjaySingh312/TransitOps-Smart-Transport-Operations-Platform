import { Schema } from "mongoose";
import mongoose from "mongoose";

const driver = new Schema(
    {

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            unique: true
        },

        licenseNumber: {
            type: String,
            unique: true
        },

        licenseCategory: String,

        licenseExpiry: Date,

        contactNumber: String,

        safetyScore: {
            type: Number,
            default: 100
        },

        status: {
            type: String,
            enum: [
                "Available",
                "On Trip",
                "Off Duty",
                "Suspended"
            ],
            default: "Available"
        }
    }

)

export const Driver = mongoose.model("Driver", driver)