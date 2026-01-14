import mongoose from "mongoose"

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  capacity: Number,
  registrationsCount: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.model("Event", eventSchema)
