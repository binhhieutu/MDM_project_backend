const { v4 } = require("uuid");
const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    id: { type: String, index: true, default: () => v4() },
    username: { type: String, index: true },
    password: { type: String },
    google_id: { type: String },
    facebook_id: { type: String },
    zalo_id: { type: String },
    apple_id: { type: String },
    email: { type: String, default: "" },
    name: { type: String, default: "" },
    avatar: { type: String, default: "" },
    active: { type: Boolean, default: true },
    product: { type: String },
    phone: { type: String },
    dob: { type: Date },
    device: {
      access_token: { type: String },
      firebase_token: { type: String },
      device_id: { type: String },
      app_version: { type: String },
      os_version: { type: String },
      platform: { type: String },
      active: { type: Boolean, default: false },
      login_method: { type: String, required: true },
      login_at: { type: Date, default: () => new Date() },
    },
  },
  { collection: COLLECTION.user, timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
