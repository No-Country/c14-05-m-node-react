const { Inscripcion, user, Eventos } = require("../db");

const createInscripcion = async (estaInscripto, isActive, userid, eventoid) => {
  console.log(userid);
  console.log(eventoid);
  const userFound = await user.findByPk(userid);
  const eventFound = await Eventos.findByPk(eventoid);
  if (userFound && eventFound) {
    const existingInscripcion = await Inscripcion.findOne({
      where: {
        userId: userid,
        EventoId: eventoid,
      },
    });

    if (existingInscripcion) {
      // El usuario ya está inscrito en el evento, mostrar mensaje de error
      return "El usuario ya está inscripto en este evento";
    }
    const nuevaInscripcion = await Inscripcion.create({
      estaInscripto,
      isActive,
    });
    await nuevaInscripcion.setUser(userFound);
    await nuevaInscripcion.setEvento(eventFound);
    return nuevaInscripcion;
  } else {
    return null;
  }
};

module.exports = {
  createInscripcion,
};
