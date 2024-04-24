const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// Register a new user
router.post("/register", userController.registerUser);
// Login as a user
router.post("/login", userController.loginUser);
// Get all users
router.get("/users", userController.getAllUsers);
// Get a user by ID
router.get("/users/:id", userController.getUserById);
// Update a user by ID
router.put("/users/:id", userController.updateUserById);

module.exports = router;