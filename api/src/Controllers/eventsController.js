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

module.exports = {
  crearEvento,
};
