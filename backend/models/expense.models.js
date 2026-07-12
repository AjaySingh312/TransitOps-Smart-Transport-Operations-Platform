import mongoose, {Schema} from "mongoose";

const expense = new Schema(
    {
    vehicle:{
        type:Schema.Types.ObjectId,
        ref:"Vehicle"
    },

    trip:{
        type:Schema.Types.ObjectId,
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
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}
)

export const Expense = mongoose.model("Expense",expense)