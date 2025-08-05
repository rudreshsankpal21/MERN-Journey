const express = require("express");
const {
  getUserProfile,
  editUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/auth");
const upload = require("../config/multer");
const userRoutes = express.Router();

// Rendering user profile
userRoutes.get("/profile", ensureAuthenticated, getUserProfile);

// Rendering edit profile page
userRoutes.get("/edit", ensureAuthenticated, editUserProfile);

// update profile route
userRoutes.post(
  "/edit",
  ensureAuthenticated,
  upload.single("profilePicture"),
  updateUserProfile
);

// Delete userProfile route
userRoutes.post("/delete", ensureAuthenticated, deleteUserProfile);
module.exports = userRoutes;
