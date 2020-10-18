const mongoose = require("mongoose");

const AuditSchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Audit", AuditSchema);