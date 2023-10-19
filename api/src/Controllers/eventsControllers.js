const { user, Eventos } = require("../db");

const createEvents = async (
  titulo,
  descripcion,
  fecha,
  hora,
  costo,
  isActive
) => {
  const nuevoEvento = await Eventos.create({
    titulo,
    descripcion,
    fecha,
    hora,
    costo,
    isActive,
  });
  return newEvent;
};

const obtenerEvento = async (req, res) => {
  try {
    const eventos = await Eventos.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al obtener los eventos." });
  }
};

const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const numFilasEliminadas = await Evento.destroy({ where: { id } });
    if (numFilasEliminadas) {
      res.status(200).json({ mensaje: "Evento eliminado correctamente." });
    } else {
      res.status(404).json({ mensaje: "Evento no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Hubo un error al eliminar el evento." });
  }
};

module.exports = {
  createEvents,
  obtenerEvento,
  eliminarEvento,
};
