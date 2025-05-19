const express = require("express");
const { ensureAuthenticated } = require("../middlewares/auth");
const {
  addComment,
  getCommentForm,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const commentRoutes = express.Router();

// add comment
commentRoutes.post("/posts/:id/comments", ensureAuthenticated, addComment);

// get comment form
commentRoutes.get("/comments/:id/edit", getCommentForm);

// update comment
commentRoutes.put("/comments/:id", ensureAuthenticated, updateComment);

// update comment
commentRoutes.delete("/comments/:id", ensureAuthenticated, deleteComment);

module.exports = commentRoutes;
