import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected successfully")
    } catch (err) {
        console.err("db connection failed", err)
    }
}

export default connectDB;