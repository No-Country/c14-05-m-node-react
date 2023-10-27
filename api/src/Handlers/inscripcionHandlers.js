const { createInscripcion } = require("../Controllers/inscripcionControllers");

const createInscripcionHandler = async (userid, eventoid, estaInscripto) => {
  try {
    const inscripcion = await createInscripcion(userid, eventoid, estaInscripto);
    return inscripcion;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createInscripcionHandler,
};
