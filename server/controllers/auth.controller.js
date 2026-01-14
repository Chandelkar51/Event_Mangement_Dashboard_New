import User from "../models/User.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/jwt.js"

export const register = async (req, res) => {
  const { name, email, password, role } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashed, role })
  res.json({ token: generateToken({ id: user._id, role: user.role }) })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid credentials" })

  res.json({ token: generateToken({ id: user._id, role: user.role }) })
}
