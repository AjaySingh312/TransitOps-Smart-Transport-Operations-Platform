import "dotenv/config"
import express from "express";
import cors from "cors"
import connectDB from "./db/connectDB.db.js"
import cookieParser from "cookie-parser";

const app = express()
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))
app.use(cookieParser())

app.use(express.json())
app.get("/", (req, res) => {
    res.send('server is running')
})
// auth system
import authRouter from "./routers/auth.routers.js"
app.use("/api/v1/auth", authRouter)

connectDB()
    .then(() => app.listen("3000", () => {
        console.log("server is started on http://localhost:3000")
    }))
    .catch((err) => console.error("failed to connect database!", err))