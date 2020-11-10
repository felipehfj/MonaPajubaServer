const mongoose = require("mongoose");

const UserAccessSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },   
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("UserAccess", UserAccessSchema);