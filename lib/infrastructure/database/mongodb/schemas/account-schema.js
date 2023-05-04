const { v4 } = require("uuid");
const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    id: { type: String, index: true, default: () => v4() },
    username: { type: String, require: true, unique: true, index: true },
    password: { type: String },
    name: { type: String },
    source: { type: String },
    avatar: { type: String },
    email: { type: String },
    phone: { type: String },
    deleted_by: { type: String },
    deleted_time: { type: Date },
    is_login: { type: Boolean, default: false },
    login_info: { type: [Object] },
    logout_info: { type: [Object] },
    role: { type: String, default: "user" },
    rules: { type: [Object] },
    product: { type: String, default: "" },
    status: { type: String, default: "active" },
    created_by: { type: String },
    updated_by: { type: String },
  },
  {
    collection: COLLECTION.account,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
