const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },  
    name:{
      type: String,
      required:false
    } 
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserModel);