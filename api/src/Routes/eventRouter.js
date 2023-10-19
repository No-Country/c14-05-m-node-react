const { Router } = require("express");
const { createEventHandler } = require("../Handlers/eventsHandlers");
const eventRouter = Router();

eventRouter.get("/", (req, res) => {
  res.send("Estoy en eventos");
});

// eventRouter.post("/", (req, res) => {
//   res.send("Se ha realizado una solicitud POST para eventos");
// });
eventRouter.post("/", createEventHandler);

eventRouter.delete("/:id", (req, res) => {
  const eventId = req.params.id;
  res.send(
    `Se ha realizado una solicitud DELETE para el evento con ID ${eventId}`
  );
});

module.exports = eventRouter;
