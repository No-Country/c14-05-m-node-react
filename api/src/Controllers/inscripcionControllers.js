const { Inscripcion, user, Eventos } = require("../db");

const createInscripcion = async (
  estaInscripto, 
  isActive, 
  userid, 
  eventoid
  ) => {
  console.log(userid);
  console.log(eventoid);
  const userFound = await user.findByPk(userid);
  if (userFound) {
    const nuevaInscripcion = await Inscripcion.create({
      estaInscripto,
      isActive,
    });
    await nuevaInscripcion.setUser(userFound);
    return nuevaInscripcion;
  } else {
    return null;
  }
};

module.exports = {
  createInscripcion,
};


