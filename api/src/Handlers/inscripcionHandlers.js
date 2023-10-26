const { createInscripcion } = require("../Controllers/inscripcionControllers");

const createInscripcionHandler = async (userId, eventoId, estaInscripto) => {
  try {
    const inscripcion = await createInscripcion(userId, eventoId, estaInscripto);
    return inscripcion;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createInscripcionHandler,
};
