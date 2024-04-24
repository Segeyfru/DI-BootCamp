const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");

module.exports = {
  registerUser: async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    const user = {
      username,
      password,
      email: email.toLowerCase(),
      first_name,
      last_name,
    };

    try {
      const userid = await userModel.createUser(user);
      res.status(201).json({ message: "User registered successfully", userid });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.getUserByEmail(email.toLowerCase());

      if (!user) return res.status(404).json({ error: "User not found" });

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch)
        return res.status(401).json({ error: "Authentication failed" });

      res.json({ message: "Login successful", userid: user.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getUserById: async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await userModel.getUserById(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateUserById: async (req, res) => {
    const userId = parseInt(req.params.id);
    // const {username, password, email, first_name, last_name} = req.body;

    let updateUser = JSON.parse(JSON.stringify(req.body));

    console.log(updateUser);

    try {
      await userModel.updateUserById(userId, updateUser);
      res.json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
