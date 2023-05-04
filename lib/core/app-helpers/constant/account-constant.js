const DEFAULT_PASSWORD = "123@@456";
const ACCOUNT_STATUS = { active: "active", deleted: "deleted", deactivate: "deactivate" };
const REQUIRE_KEY = {
  create: ["username", "name", "status"],
  update: ["username", "name", "phone", "status"],
};

module.exports = {
  REQUIRE_KEY,
  ACCOUNT_STATUS,
  DEFAULT_PASSWORD,
};
