const RoleRepo = require("../../repository/role-repository");

module.exports = async ({ roleRepo = RoleRepo.prototype }, condition, ability) => {
  return await roleRepo.selectMany({ condition, ability, limit: 1000 });
};
