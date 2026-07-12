import { Router } from "express"
import {registerDriver, getDrivers, getOneDriver, updateDriver, retireDriver} from "../controllers/driver.controllers.js"
import verifyAT from "../middleware/verifyAT.middleware.js"
import asyncHandler from "../utils/asyncHandler.utils.js"
import { Driver } from "../models/driver.models.js"

const router = Router()
router.post("/register-driver",verifyAT,asyncHandler(registerDriver))
router.get("/get-drivers",verifyAT,asyncHandler(getDrivers))
router.get("/get-one-driver",verifyAT,asyncHandler(getOneDriver))
router.patch("/update-driver",verifyAT,asyncHandler(updateDriver))
router.patch("/retire-driver",verifyAT,asyncHandler(retireDriver))

export default router