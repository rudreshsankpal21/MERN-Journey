const express = require("express");
const {
  getLogin,
  getRegister,
  register,
  login,

  logout,
} = require("../controllers/authController");
const authRoutes = express.Router();

// Render Login page
authRoutes.get("/login", getLogin);

// Logic for user login
authRoutes.post("/login", login);

// Render register page
authRoutes.get("/register", getRegister);

//Logic for user Registration
authRoutes.post("/register", register);

//Logout Route
authRoutes.get("/logout", logout);
module.exports = authRoutes;
