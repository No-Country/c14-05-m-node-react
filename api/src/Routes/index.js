const { Router } = require("express");

const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");
const mainRouter = Router();

mainRouter.use("/event", eventRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
