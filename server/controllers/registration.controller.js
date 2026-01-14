import Registration from "../models/Registration.model.js"
import Event from "../models/Event.model.js"

export const registerEvent = async (req, res) => {
  const reg = await Registration.create({
    userId: req.user.id,
    eventId: req.params.eventId
  })

  await Event.findByIdAndUpdate(req.params.eventId, {
    $inc: { registrationsCount: 1 }
  })

  res.json(reg)
}
