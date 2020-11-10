const mongoose = require("mongoose");

const UserPajubaSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    pajuba: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pajuba'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("UserPajuba", UserPajubaSchema);