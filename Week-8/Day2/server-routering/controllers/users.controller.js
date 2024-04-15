const { users } = require("../config/data.js");

const getAllUsers = (req, res) => {
  res.json({users, hi:'hi'});
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.sendStatus(404);
  }
  res.status(200).json(user);
}

module.exports = {
  getAllUsers,
  getUserById,
};
