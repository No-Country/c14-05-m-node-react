const { Eventos } = require("../db");

const createEvent = async (titulo, descripcion, fecha) => {
  const eventFound = await Eventos.findOne({ where: { titulo: titulo } });
  if (eventFound) {
    return null;
  } else {
    const newEvent = await Eventos.create({
      titulo,
      descripcion,
      fecha,
    });
    return newEvent;
  }
};

const findEventById = async (id) => {
  const event = await Eventos.findByPk(id);
  return event;
};

const deleteEventById = async (id) => {
  const eventToDelete = await Eventos.findByPk(id);
  if (!eventToDelete) return null;
  await eventToDelete.destroy();
  const remainingEvents = await Eventos.findAll();
  return remainingEvents;
};

module.exports = {
  createEvent,
  findEventById,
  deleteEventById,
};
