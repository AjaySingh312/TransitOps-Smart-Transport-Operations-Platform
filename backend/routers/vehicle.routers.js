import { Router } from "express"
import { registerVehicle, getOneVehicle, getVehicles, updateVehicle, retireVehicle } from "../controllers/vehicle.controllers.js"
import asyncHandler from "../utils/asyncHandler.utils.js"
import verifyAT from "../middleware/verifyAT.middleware.js"
const router = Router()

router.post("/register-vehicle",verifyAT, asyncHandler(registerVehicle))
router.get("/get-one-vehicle/:vehicleId",verifyAT, asyncHandler(getOneVehicle))
router.get("/get-vehicles",verifyAT, asyncHandler(getOneVehicle))
router.patch("/update-vehicle",verifyAT, asyncHandler(updateVehicle))
router.patch("/retire-vehicle",verifyAT, asyncHandler(retireVehicle))



export default router