const { Router } = require("express");

const {
  crearEventoHandler,
  obtenerEventoPorIdHandler,
  eliminarEventoPorIdHandler,
} = require('../Handlers/eventsHandlers');
const eventRouter = Router();

eventRouter.post('/evento', crearEventoHandler);
eventRouter.get('/evento/:id', obtenerEventoPorIdHandler);
eventRouter.delete('/evento/:id', eliminarEventoPorIdHandler);

module.exports = eventRouter;
