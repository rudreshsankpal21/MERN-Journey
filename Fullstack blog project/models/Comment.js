const mongoose = require("mongoose");

//Schema for post
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
