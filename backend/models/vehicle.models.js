    import mongoose, { Schema } from "mongoose";

const vehicle = new Schema(
    {
        registrationNumber: {
            type: String,
            unique: true
        },

        vehicleName: String,

        model: String,

        type: {
            type: String,
            enum: [
                "Truck",
                "Van",
                "Pickup",
                "Mini Truck",
                "Trailer",
                "Other"
            ]
        },

        maxLoadCapacity: Number,

        odometer: Number,

        acquisitionCost: Number,

        status: {
            type: String,
            enum: [
                "Available",
                "On Trip",
                "In Shop",
                "Retired"
            ],
            default: "Available"
        },

        region: String,

        createdBy: {
            type:Schema.Types.ObjectId ,
            ref: "User"
        }
    }
)

export const Vehicle = mongoose.model("Vehicle", vehicle)