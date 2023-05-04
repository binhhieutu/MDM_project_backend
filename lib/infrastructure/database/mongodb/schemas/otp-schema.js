const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    phone: { type: String },
    body: { type: Object },
    result: { type: Object },
    date: { type: String, default: () => new Date().toLocaleDateString() },
    created_at: { type: Date, default: () => new Date() },
  },
  { collection: COLLECTION.otp, timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
