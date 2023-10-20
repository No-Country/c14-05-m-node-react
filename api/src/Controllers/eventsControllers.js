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


const findEventById = async (id) => {
  const event = await Eventos.findByPk(id);
  return event;
};

// const updateEventById = async (id, titulo, descripcion, fecha, hora, costo, isActive, userid) => {
//   const eventToUpdate = await Eventos.findByPk(id);
//   if (!eventToUpdate) return null;
//   const updatedEvent = await eventToUpdate.update({
//     titulo,
//     descripcion,
//     fecha,
//     hora,
//     costo,
//     isActive,
//     userid,
//   });
//   return updatedEvent;
// };

module.exports = {
  createEvents,
  deleteEventById,
  findEventById,
 // updateEventById,
};



