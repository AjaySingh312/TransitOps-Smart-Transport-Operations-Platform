import mongoose, { Schema } from "mongoose";

const maintenance = new Schema(
    {
        vehicle: {
            type: ObjectId,
            ref: "Vehicle"
        },

        title: String,

        description: String,

        cost: Number,

        status: {
            type: String,
            enum: [
                "Active",
                "Closed"
            ],
            default: "Active"
        },

        createdBy: {
            type: ObjectId,
            ref: "User"
        },

        closedAt: Date
    }
)

export const Maintenance = mongoose.model("Maintenance", maintenance)