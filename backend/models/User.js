const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Schema
let userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    avatar: {
      type: Array,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
