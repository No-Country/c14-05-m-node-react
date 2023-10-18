const { Evento } = require('./db.js');

const crearEvento = async (req, res) => {
  try {
    const nuevoEvento = await Evento.create(req.body);
    res.status(201).json(nuevoEvento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al crear el evento.' });
  }
};

const obtenerEvento = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los eventos.' });
  }
};

const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const numFilasEliminadas = await Evento.destroy({ where: { id } });
    if (numFilasEliminadas) {
      res.status(200).json({ mensaje: 'Evento eliminado correctamente.' });
    } else {
      res.status(404).json({ mensaje: 'Evento no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el evento.' });
  }
};

module.exports = {
  crearEvento,
  obtenerEvento,
  eliminarEvento,
};
