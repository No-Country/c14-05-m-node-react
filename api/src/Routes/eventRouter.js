const { Router } = require("express");
const {
  createEventHandler,
  deleteEventByIdHandler,
} = require("../Handlers/eventsHandlers");
const eventRouter = Router();

eventRouter.get("/", (req, res) => {
  res.send("Estoy en eventos");
});

// eventRouter.post("/", (req, res) => {
//   res.send("Se ha realizado una solicitud POST para eventos");
// });
eventRouter.post("/", createEventHandler);

eventRouter.delete("/:id", deleteEventByIdHandler);

module.exports = eventRouter;
