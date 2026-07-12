import mongoose, {Schema} from "mongoose";

const fuelLog = new Schema(
    {
    vehicle:{
        type:ObjectId,
        ref:"Vehicle"
    },

    trip:{
        type:ObjectId,
        ref:"Trip"
    },

    liters:Number,

    cost:Number,

    date:Date,

    createdBy:{
        type:ObjectId,
        ref:"User"
    }
}
)
export const FuelLog = mongoose.model("FuelLog",fuelLog)