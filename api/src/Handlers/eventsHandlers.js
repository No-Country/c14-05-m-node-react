const { createEvents } = require("../Controllers/eventsControllers");
//const eventoController = require('../Controllers/eventsController');

// router.post('/evento', eventoController.crearEvento);
// router.get('/evento', eventoController.obtenerEvento);
// router.delete('/evento/:id', eventoController.eliminarEvento);

const createEventHandler = async (req, res) => {
  try {
    const { titulo, descripcion, fecha, hora, costo, isActive } = req.body;
    const newEvent = await createEvents(
      titulo,
      descripcion,
      fecha,
      hora,
      costo,
      isActive
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
module.exports = {
  createEventHandler,
};
