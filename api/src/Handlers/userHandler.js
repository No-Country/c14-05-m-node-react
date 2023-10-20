const {
  userRegister,
  deleteUserById,
  updateUserById,
} = require("../Controllers/userController");

const userRegisterHandler = async (req, res) => {
  try {
    const { username, email, gener } = req.body;
    const newUser = await userRegister(username, email, gener);
    if (!newUser)
      return res
        .status(409)
        .json({ msg: `User with email ${email} already exists` });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUserById(id);
    if (!response)
      return res.status(404).json({ msg: `User with id ${id} not found` });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedUser = await updateUserById(id, body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userRegisterHandler,
  deleteUserByIdHandler,
  updateUserByIdHandler,
};
