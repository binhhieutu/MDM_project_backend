const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    id: { type: String },
    test_list: { type: [String], index: true },
  },
  { collection: COLLECTION.config, timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
