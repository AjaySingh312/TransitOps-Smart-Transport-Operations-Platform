import { Router } from "express"
import {createTrip, dispatchTrip} from "../controllers/trip.controllers.js"
import verifyAT from "../middleware/verifyAT.middleware.js"
import asyncHandler from "../utils/asyncHandler.utils.js"

const router = Router()

router.post("/create-trip",verifyAT,asyncHandler(createTrip))
router.patch("/dispatch-trip",verifyAT,asyncHandler(dispatchTrip))

export default router