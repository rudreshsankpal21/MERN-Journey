const mongoose = require("mongoose");

//Schema for the user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: Object,
      public_id: String,
      url: String,
    },
    bio: {
      type: String,
      max: 120,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
