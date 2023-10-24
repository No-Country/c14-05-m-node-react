const { user, Eventos } = require("../db");

const createEvents = async (
  titulo,
  provincia,
  ubicacion,
  descripcion,
  fecha,
  hora,
  costo,
  isActive,
  userid
) => {
  console.log(userid);
  const us = await user.findByPk(userid);
  if (us) {
    const nuevoEvento = await Eventos.create({
      titulo,
      provincia,
      ubicacion,
      descripcion,
      fecha,
      hora,
      costo,
      isActive,
    });
    await nuevoEvento.setUser(us);
    return nuevoEvento;
  } else {
    return null;
  }
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
  if (!event) return resizeBy.send("evento no existe");
  return event;
};

const updateEventById = async (
  titulo,
  provincia,
  ubicacion,
  descripcion,
  fecha,
  hora,
  costo,
  isActive,
  userid
) => {
  const eventToUpdate = await Eventos.findByPk(id);
  if (!eventToUpdate) return null;
  const updatedEvent = await eventToUpdate.update({
    titulo,
    provincia,
    ubicacion,
    descripcion,
    fecha,
    hora,
    costo,
    isActive,
    userid,
  });
  return updatedEvent;
};

const findAllEvents = async () => {
  const allEvents = await Eventos.findAll({});
  return allEvents;
};

module.exports = {
  createEvents,
  deleteEventById,
  findEventById,
  findAllEvents,
  updateEventById,
};
