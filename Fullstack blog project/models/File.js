const mongoose = require("mongoose");

//Schema for post
const fileSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      require: true,
    },
    public_id: {
      type: String,
      require: true,
    },
    uploaded_by: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Files = mongoose.model("File", fileSchema);
module.exports = Files;
