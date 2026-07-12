import mongoose, {Schema} from "mongoose";

const expense = new Schema(
    {
    vehicle:{
        type:ObjectId,
        ref:"Vehicle"
    },

    trip:{
        type:ObjectId,
        ref:"Trip"
    },

    type:{
        type:String,
        enum:[
            "Maintenance",
            "Toll",
            "Repair",
            "Insurance",
            "Misc"
        ]
    },

    amount:Number,

    date:Date,

    createdBy:{
        type:ObjectId,
        ref:"User"
    }
}
)

export const Expense = mongoose.model("Expense",expense)