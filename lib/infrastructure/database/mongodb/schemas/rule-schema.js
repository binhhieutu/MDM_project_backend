const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    name: { type: String, index: true, unique: true },
    actions: { type: String },
    subject: { type: String },
    fields: { type: String },
    status: { type: String },
    conditions: { type: Object },
    inverted: { type: Boolean },
    reason: { type: String },
    created_by: { type: String },
    updated_by: { type: String },
  },
  {
    collection: COLLECTION.rule,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
