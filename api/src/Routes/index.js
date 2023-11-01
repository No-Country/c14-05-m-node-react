const { Router } = require("express");
const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");
const inscripcionRouter = require("./insricpionRouter");
const mainRouter = Router();

mainRouter.use("/Eventos", eventRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/Inscripcion", inscripcionRouter); 

module.exports = mainRouter;
