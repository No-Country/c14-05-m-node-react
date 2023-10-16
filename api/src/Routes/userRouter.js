const { Router } = require("express");
const {
  userRegisterHandler,
  deleteUserByIdHandler,
} = require("../Handlers/userHandler");
const userRouter = Router();

// userRouter.get("/", (req, res) => {
//   res.send("estoy en user");
// });

userRouter.post("/", userRegisterHandler);
userRouter.delete("/:id", deleteUserByIdHandler);
module.exports = userRouter;
