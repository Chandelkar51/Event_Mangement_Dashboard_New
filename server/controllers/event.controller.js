import Event from "../models/Event.model.js"

export const createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, createdBy: req.user.id })
  res.json(event)
}

export const getEvents = async (_, res) => {
  const events = await Event.find().populate("createdBy", "name")
  res.json(events)
}
