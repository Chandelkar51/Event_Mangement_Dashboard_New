import express from "express"
import { createEvent, getEvents } from "../controllers/event.controller.js"
import { protect } from "../middlewares/auth.middleware.js"

const router = express.Router()
router.get("/", getEvents)
router.post("/", protect, createEvent)
export default router
