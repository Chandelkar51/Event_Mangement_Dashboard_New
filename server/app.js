import express from "express"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import eventRoutes from "./routes/event.routes.js"
import registrationRoutes from "./routes/registration.routes.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/register", registrationRoutes)

export default app
