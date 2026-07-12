import { Router } from "express"
import { userRegister, userLogin, userLogout, RefreshAccessToken } from "../controllers/auth.controllers.js"
import asyncHandler from "../utils/asyncHandler.utils.js"
import verifyAT from "../middleware/verifyAT.middleware.js"

const router = Router()

router.post("/register",asyncHandler(userRegister))

router.post("/login", asyncHandler(userLogin))

router.post("/logout",verifyAT,asyncHandler(userLogout))

router.post("/refresh-access-token",asyncHandler(RefreshAccessToken))

export default router