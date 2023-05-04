const RoleRepo = require("../../repository/role-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ roleRepo = RoleRepo.prototype }, id) => {
  const result = await roleRepo.removeOne({ id });
  if (!result) throw new customError.ClientError(errorCode.DELETE_ERROR);

  return result;
};
