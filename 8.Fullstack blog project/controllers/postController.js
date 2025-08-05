const asyncHandler = require("express-async-handler");
const Files = require("../models/File");
const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");
// Rendering post form
exports.getPostForm = asyncHandler((req, res) => {
  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    error: "",
    success: "",
  });
});

// Creating new post
exports.createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  // Validation
  if (!req.files || req.files.length === 0) {
    return res.render("newPost", {
      title: "Create Post",
      user: req.user,
      error: "Atleast one Image is Mandatory",
      success: "",
    });
  }

  // Save the files into DB
  const images = await Promise.all(
    req.files.map(async (file) => {
      // Save the images into the DB
      const newFile = new Files({
        url: file.path,
        public_id: file.filename,
        uploaded_by: req.user._id,
      });
      await newFile.save();

      return {
        url: newFile.url,
        public_id: newFile.public_id,
      };
    })
  );

  // Create the post
  const newPost = new Post({
    title,
    content,
    author: req.user._id,
    images,
  });

  await newPost.save();

  res.render("newPost", {
    title: "Create Post",
    user: req.user,
    error: "",
    success: "Post created successfully",
  });
});

// Get all posts
exports.getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("author", "username");

  res.render("posts", {
    title: "Posts",
    posts,
    user: req.user,
    success: "",
    error: "",
  });
});

// Get post by id
exports.getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "username")
    .populate({
      path: "comments",
      populate: {
        path: "author",
        model: "User",
        select: "username",
      },
    });
  res.render("postDets", {
    title: "Post",
    post,
    user: req.user,
    success: "",
    error: "",
  });
});

//get edit post form
exports.getEditPostForm = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.render("postDetails", {
      title: "Post",
      post,
      user: req.user,
      error: "Post not found",
      success: "",
    });
  }

  res.render("editPost", {
    title: "Edit Post",
    post,
    user: req.user,
    error: "",
    success: "",
  });
});

// update Post
exports.updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  // Find the post by id
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.render("postDetails", {
      title: "Post",
      post,
      user: req.user,
      error: "Post not found",
      success: "",
    });
  }

  // check if the editor of post isAuthor or not
  if (post.author.toString() !== req.user._id.toString()) {
    return res.render("postDets", {
      title: "Post",
      post,
      user: req.user,
      error: "You are not authorized to edit this post",
      success: "",
    });
  }

  // show what to edit
  post.title = title || post.title;
  post.content = content || post.content;
  if (req.files) {
    await Promise.all(
      post.images.map(async (image) => {
        // Remove images from cloudinary
        await cloudinary.uploader.destroy(image.public_id);
      })
    );
  }
  post.images = await Promise.all(
    req.files.map(async (file) => {
      const newFile = new Files({
        url: file.path,
        public_id: file.filename,
        uploaded_by: req.user._id,
      });
      await newFile.save();
      return {
        url: newFile.url,
        public_id: newFile.public_id,
      };
    })
  );

  await post.save();
  res.redirect(`/posts/${post._id}`);
});

// Delete Post
exports.deletePost = asyncHandler(async (req, res) => {
  // Find the post
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.render("postDets", {
      title: "Post",
      post,
      user: req.user,
      error: "Post not found",
      success: "",
    });
  }
  // Deletion of post
  await Promise.all(
    post.images.map(async (img) => {
      await cloudinary.uploader.destroy(img.public_id);
    })
  );

  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
});
