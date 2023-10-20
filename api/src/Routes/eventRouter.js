const { Router } = require("express");

const {
  createEventHandler,
  deleteEventByIdHandler,
  findEventByIdHandler,
  updateEventByIdHandler,
  findAllEventsHandler,
} = require("../Handlers/eventsHandlers");
const eventRouter = Router();

//  eventRouter.get("/", (req, res) => {
//     res.send("Estoy en eventos");
//   });

eventRouter.post("/", createEventHandler);
eventRouter.delete("/:id", deleteEventByIdHandler);
eventRouter.put("/:id", updateEventByIdHandler);
eventRouter.get("/:id", findEventByIdHandler);
eventRouter.get("/", findAllEventsHandler);
module.exports = eventRouter;
