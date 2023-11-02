const { Inscripcion, user, Eventos } = require("../db");

const createInscripcion = async (
  estaInscripto,
  isActive,
  userid,
  eventoid,
  amount,
  amountPro,
  imageBoleto
) => {
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
      amount,
      amountPro,
      imageBoleto,
    });
    await nuevaInscripcion.setUser(userFound);
    await nuevaInscripcion.setEvento(eventFound);
    return nuevaInscripcion;
  } else {
    return null;
  }
};

const findInscripcionById = async (inscripcionId) => {
  const inscripcion = await Inscripcion.findByPk(inscripcionId);
  return inscripcion;
};

const updateInscripcion = async (
  inscripcionId,
  estaInscripto,
  isActive,
  amount,
  amountPro,
  imageBoleto
) => {
  const inscripcion = await Inscripcion.findByPk(inscripcionId);
  if (inscripcion) {
    inscripcion.estaInscripto = estaInscripto;
    inscripcion.isActive = isActive;
    inscripcion.amount = amount;
    inscripcion.amountPro = amountPro;
    inscripcion.imageBoleto = imageBoleto;

    await inscripcion.save();
    return inscripcion;
  } else {
    return null;
  }
};

const deleteInscripcion = async (inscripcionId) => {
  const deletedInscripcion = await Inscripcion.destroy({
    where: { id: inscripcionId },
  });
  return deletedInscripcion;
};

const findAllInscripciones = async () => {
  const allInscripciones = await Inscripcion.findAll({});
  return allInscripciones;
};

module.exports = {
  createInscripcion,
  findInscripcionById,
  updateInscripcion,
  deleteInscripcion,
  findAllInscripciones,
};
