const OTPRepo = require("./otp");
const ConfigRepo = require("./config");
const UserRepo = require("./user");
const AccountRepo = require("./account");
const RoleRepo = require("./role");
const RuleRepo = require("./rule");

module.exports = {
  ruleRepo: new RuleRepo(),
  roleRepo: new RoleRepo(),
  otpRepo: new OTPRepo(),
  configRepo: new ConfigRepo(),
  userRepo: new UserRepo(),
  accountRepo: new AccountRepo(),
};
