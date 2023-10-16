const { Router } = require("express");

const eventRouter = Router();

eventRouter.get("/", (req, res) => {
  res.send("estoy en eventos");
});

module.exports = eventRouter;
