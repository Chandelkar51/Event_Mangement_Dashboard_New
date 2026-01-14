import jwt from "jsonwebtoken"
import { env } from "../config/env.js"

export const generateToken = (payload) =>
  jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7d" })
