const user = require("./user-schema");
const otp = require("./otp-schema");
const config = require("./config-schema");
const account = require("./account-schema");
const role = require("./role-schema");
const rule = require("./rule-schema");

module.exports = {
  rule,
  role,
  user,
  otp,
  config,
  account,
};
