const { createEvents, deleteEventById, findEventById  } = require("../Controllers/eventsControllers");
//const { findEventById } = require("../Controllers/eventsControllers");

//post()--------------------------
const createEventHandler = async (req, res) => {
  try {
    const { titulo, descripcion, fecha, hora, costo, isActive, userid } = req.body;
    const newEvent = await createEvents(titulo, descripcion, fecha, hora, costo, isActive, userid);
    if (!newEvent)
      return res.status(409).json({ msg: `User with email ${email} already exists` });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete()----------------------
const deleteEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteEventById(id);
    if (!response) return res.status(404).json({ msg: `User with id ${id} not found` });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//// get()-------------------
const findEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await findEventById(id);
    if (!event) return res.status(404).json({ msg: `Event with id ${id} not found` });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
/////put()---------------------------------------
// const updateEventByIdHandler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { titulo, descripcion, fecha, hora, costo, isActive, userid } = req.body;
//     const updatedEvent = await updateEventById(id, titulo, descripcion, fecha, hora, costo, isActive, userid);
//     if (!updatedEvent) return res.status(404).json({ msg: `Event with id ${id} not found` });
//     res.status(200).json(updatedEvent);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  createEventHandler,
  deleteEventByIdHandler,
  findEventByIdHandler,
//  updateEventByIdHandler
};









module.exports = {
  createEventHandler,
  deleteEventByIdHandler,
};
