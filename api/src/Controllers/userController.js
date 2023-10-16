const { user } = require("../db");

const userRegister = async (username, email, gener) => {
  const userFound = await user.findOne({ where: { email: email } });
  if (userFound) {
    return null;
  } else {
    const newUser = await user.create({
      username,
      email,
      gener,
    });
    return newUser;
  }
};

const deleteUserById = async (id) => {
  const userToDestroy = await user.findByPk(id);
  if (!userToDestroy) return null;
  await userToDestroy.destroy();
  const remainingUsers = await user.findAll();
  return remainingUsers;
};
module.exports = {
  userRegister,
  deleteUserById,
};
