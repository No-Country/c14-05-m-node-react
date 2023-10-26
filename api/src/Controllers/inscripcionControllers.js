const { Inscripcion } = require("../db");

const createInscripcion = async (userId, eventoId, estaInscripto) => {
  try {
    const inscripcion = await Inscripcion.create({ userId, eventoId, estaInscripto });
    return inscripcion;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createInscripcion,
};
