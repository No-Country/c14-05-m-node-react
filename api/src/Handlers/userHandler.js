// const { userRegister } = require("../Controllers/userController");

// const userRegisterHandler = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = await userRegister(username, email, password);
//     if (!newUser)
//       return res
//         .status(409)
//         .json({ msg: `User with email ${email} already exists` });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// module.exports = {
//   userRegisterHandler,
// };
