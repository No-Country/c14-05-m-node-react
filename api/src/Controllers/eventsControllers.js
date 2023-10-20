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
  
};

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
