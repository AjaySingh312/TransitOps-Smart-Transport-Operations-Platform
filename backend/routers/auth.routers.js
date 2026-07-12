import { userRegister, userLogin, userLogout, RefreshAccessToken } from "../controllers/auth.controllers.js"
import asyncHandler from "../utils/asyncHandler.utils.js"

router.post("/register",asyncHandler(userRegister))

router.post("/login", asyncHandler(userLogin))

router.post("/logout",verifyAT,asyncHandler(userLogout))

router.post("/refresh-access-token",asyncHandler(RefreshAccessToken))