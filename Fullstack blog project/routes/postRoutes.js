const express = require("express");
const {
  getPostForm,
  createPost,
  getPosts,
  getPostById,
  getEditPostForm,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const upload = require("../config/multer");
const { ensureAuthenticated } = require("../middlewares/auth");
const postRoutes = express.Router();

// Get Post form route
postRoutes.get("/add", ensureAuthenticated, getPostForm);

//Creating new post route
postRoutes.post(
  "/add",
  ensureAuthenticated,
  upload.array("images", 10),
  createPost
);

// Getting all posts
postRoutes.get("/", getPosts);

// get post by id
postRoutes.get("/:id", getPostById);

//get edit post form
postRoutes.get("/:id/edit", getEditPostForm);

// Update post
postRoutes.put(
  "/:id",
  ensureAuthenticated,
  upload.array("images", 8),
  updatePost
);

// Delete post
postRoutes.delete("/:id", ensureAuthenticated, deletePost);

module.exports = postRoutes;
