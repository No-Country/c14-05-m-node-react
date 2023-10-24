const { Router } = require("express");

const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");
const mainRouter = Router();

mainRouter.use("/Eventos", eventRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
