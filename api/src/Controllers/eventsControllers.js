const { user, Eventos } = require("../db");

const createEvents = async (
  titulo,
  descripcion,
  fecha,
  hora,
  costo,
  isActive,
  userid
) => {
  // const usuario = await user.findByPk(userid);
  // if (usuario) {
  //   console.log(usuario);
  const nuevoEvento = await Eventos.create({
    titulo,
    descripcion,
    fecha,
    hora,
    costo,
    isActive,
    userid,
  });
  return nuevoEvento;
  // } else {
  //   console.log("El usuario no fue encontrado");
  // }
};

// const obtenerEvento = async (req, res) => {
//   try {
//     const eventos = await Eventos.findAll();
//     res.status(200).json(eventos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensaje: "Hubo un error al obtener los eventos." });
//   }
// };

const deleteEventById = async (id) => {
  const eventToDestroy = await Eventos.findByPk(id);
  if (!eventToDestroy) return null;
  await eventToDestroy.destroy();
  const remainingEvents = await Eventos.findAll();
  return remainingEvents;
};

module.exports = {
  createEvents,
  //obtenerEvento,
  deleteEventById,
};
