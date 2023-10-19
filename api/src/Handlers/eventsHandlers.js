const {
  createEvent,
  findEventById,
  deleteEventById,
} = require("../Controllers/eventsControlles");

const crearEventoHandler = async (req, res) => {
  try {
    const { titulo, descripcion, fecha } = req.body;
    const nuevoEvento = await createEvent(titulo, descripcion, fecha);
    if (!nuevoEvento)
      return res
        .status(409)
        .json({ msg: `Evento con el título ${titulo} ya existe` });
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerEventoPorIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await findEventById(id);
    if (!evento) return res.status(404).json({ msg: `Evento con ID ${id} no encontrado` });
    res.status(200).json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminarEventoPorIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await deleteEventById(id);
    if (!respuesta) return res.status(404).json({ msg: `Evento con ID ${id} no encontrado` });
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearEventoHandler,
  obtenerEventoPorIdHandler,
  eliminarEventoPorIdHandler,
};
