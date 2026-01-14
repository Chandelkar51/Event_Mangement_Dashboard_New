import express from "express"
import { registerEvent } from "../controllers/registration.controller.js"
import { protect } from "../middlewares/auth.middleware.js"

const router = express.Router()
router.post("/:eventId", protect, registerEvent)
export default router
