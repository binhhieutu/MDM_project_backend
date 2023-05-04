const RoleRepo = require("../../repository/rule-repository");

module.exports = async ({ roleRepo = RoleRepo.prototype }) => {
  return await roleRepo.initData();
};
