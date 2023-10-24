const { user, Eventos } = require("../db");

const userRegister = async (id, nombre, apellido, provincia, email, gener) => {
  const userFound = await user.findOne({ where: { email: email } });
  if (userFound) {
    return null;
  } else {
    const newUser = await user.create({
      id,
      nombre,
      apellido,
      provincia,
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

const updateUserById = async (id, body) => {
  const userToUpdate = await user.findByPk(id);
  if (!userToUpdate) throw new Error(`User with id ${id} not found`);
  await userToUpdate.update(body);
  return userToUpdate;
};
module.exports = {
  userRegister,
  deleteUserById,
  updateUserById,
};
