import mongoose, {Schema} from "mongoose";

const fuelLog = new Schema(
    {
    vehicle:{
        type:Schema.Types.ObjectId,
        ref:"Vehicle"
    },

    trip:{
        type:Schema.Types.ObjectId,
        ref:"Trip"
    },

    liters:Number,

    cost:Number,

    date:Date,

    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}
)
export const FuelLog = mongoose.model("FuelLog",fuelLog)