const {
  createEvents,
  deleteEventById,
} = require("../Controllers/eventsControllers");
//const eventoController = require('../Controllers/eventsController');

// router.post('/evento', eventoController.crearEvento);
// router.get('/evento', eventoController.obtenerEvento);
// router.delete('/evento/:id', eventoController.eliminarEvento);

const createEventHandler = async (req, res) => {
  try {
    const { titulo, descripcion, fecha, hora, costo, isActive, userid } =
      req.body;
    const newEvent = await createEvents(
      titulo,
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
module.exports = {
  createEventHandler,
  deleteEventByIdHandler,
};
