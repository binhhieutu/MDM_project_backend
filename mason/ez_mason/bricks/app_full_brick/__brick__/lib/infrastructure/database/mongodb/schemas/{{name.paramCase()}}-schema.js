const { v4 } = require("uuid");
const mongoose = require("mongoose");
const COLLECTION = require("../collections");
//todo update schema
module.exports = new mongoose.Schema(
  {
    id: { type: String, index: true, default: () => v4() },
    updated_by: { type: String, required: true },
    created_by: { type: String, required: true },
  },
  {
    collection: COLLECTION.{{name.camelCase()}},
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
