// const { user } = require("../../db");

// const userRegister = async (username, email) => {
//   const userFound = await user.findOne({ where: { email: email } });
//   if (userFound) {
//     return null;
//   } else {
//     const newUser = await user.create({
//       username,
//       email,
//     });
//     await registerEmail(`${email}`);
//     return newUser;
//   }
// };
// module.exports = {
//   userRegister,
// };
