const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
// Add commments
exports.addComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;

  //   Find post
  const post = await Post.findById(postId);
  //   Validation
  if (!post) {
    return res.render("postDets", {
      title: "Post",
      post,
      user: req.user,
      error: "Post not found",
      success: "",
    });
  }
  if (!content) {
    return res.render("postDets", {
      title: "Post",
      post,
      user: req.user,
      error: "Empty comment cannot be sent",
      success: "",
    });
  }

  //   Save comment
  const comment = new Comment({
    content,
    post: postId,
    author: req.user._id,
  });
  await comment.save();

  //   Push comment to the post
  post.comments.push(comment._id);
  await post.save();

  //   redirect to the post
  res.redirect(`/posts/${postId}`);
});

// get comment form
exports.getCommentForm = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return res.render("postDets", {
      title: "Post",
      comment,
      user: req.user,
      error: "comment not found",
      success: "",
    });
  }

  res.render("editComment", {
    title: "Comment",
    comment,
    user: req.user,
    error: "",
    success: "",
  });
});

// update comment
exports.updateComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return res.render("postDets", {
      title: "Post",
      comment,
      user: req.user,
      error: "Comment not found",
      success: "",
    });
  }

  if (comment.author.toString() !== req.user._id.toString()) {
    return res.render("postDets", {
      title: "Post",
      comment,
      user: req.user,
      success: "",
      error: "You are not authorized to edit this comment",
    });
  }

  comment.content = content || comment.content;
  await comment.save();
  res.redirect(`/posts/${comment.post}`);
});

// Delete comment
exports.deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    return res.render("postDets", {
      title: "Posts",
      user: req.user,
      comment,
      error: "Comment not found",
      success: "",
    });
  }

  if (comment.author.toString() !== req.user._id.toString()) {
    res.render("postDets", {
      title: "Posts",
      comment,
      user: req.user,
      success: "",
      error: "You are not authorized to delete this comment",
    });
  }

  await Comment.findByIdAndDelete(req.params.id);
  res.redirect(`/posts/${comment.post}`);
});
