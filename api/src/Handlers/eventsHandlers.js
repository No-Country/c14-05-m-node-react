const {
  createEvents,
  deleteEventById,
  findEventById,
  updateEventById,
  findAllEvents,
} = require("../Controllers/eventsControllers");

//post()--------------------------
const createEventHandler = async (req, res) => {
  try {
    const {
      titulo,
      provincia,
      ubicacion,
      descripcion,
      fecha,
      hora,
      costo,
      isActive,
      userid,
    } = req.body;
    const newEvent = await createEvents(
      titulo,
      provincia,
      ubicacion,
      descripcion,
      fecha,
      hora,
      costo,
      isActive,
      userid
    );
    if (!newEvent)
      return res
        .status(409)
        .json({ msg: `User with email ${email} already exists` });
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
    if (!response)
      return res.status(404).json({ msg: `User with id ${id} not found` });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//// get()-------------------
const findEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await findEventById(id);
    if (!response)
      return res.status(404).json({ msg: `Event with id ${id} not found` });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
/////put()---------------------------------------
const updateEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      titulo,
      provincia,
      ubicacion,
      descripcion,
      fecha,
      hora,
      costo,
      isActive,
      userid,
    } = req.body;
    const updatedEvent = await updateEventById(
      titulo,
      provincia,
      ubicacion,
      descripcion,
      fecha,
      hora,
      costo,
      isActive,
      userid
    );
    if (!updatedEvent)
      return res.status(404).json({ msg: `Event with id ${id} not found` });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findAllEventsHandler = async (req, res) => {
  try {
    const allEvents = await findAllEvents();
    res.status(200).json(allEvents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEventHandler,
  deleteEventByIdHandler,
  findEventByIdHandler,
  updateEventByIdHandler,
  findAllEventsHandler,
};
