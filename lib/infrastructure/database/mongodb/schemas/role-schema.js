const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    name: { type: String, index: true, unique: true },
    rules: { type: [String] },
    created_by: { type: String },
    updated_by: { type: String },
  },
  {
    collection: COLLECTION.role,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
