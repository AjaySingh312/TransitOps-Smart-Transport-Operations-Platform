import mongoose, { mongo, Schema } from "mongoose";

const trip = new Schema(
    {
        source: String,

        destination: String,

        vehicle: {
            type: Schema.Types.ObjectId,
            ref: "Vehicle"
        },

        driver: {
            type: Schema.Types.ObjectId,
            ref: "Driver"
        },

        cargoWeight: Number,

        plannedDistance: Number,

        actualDistance: Number,

        startOdometer: Number,

        endOdometer: Number,

        fuelConsumed: Number,

        revenue: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: [
                "Draft",
                "Dispatched",
                "Completed",
                "Cancelled"
            ],
            default: "Draft"
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

export const Trip = mongoose.model("Trip",trip)