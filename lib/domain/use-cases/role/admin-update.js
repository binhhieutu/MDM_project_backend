
const RoleRepo = require("../../repository/role-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ roleRepo = RoleRepo.prototype }, id, updateData) => {
  const result = await roleRepo.updateOne({ id }, updateData);
  if (!result) throw new customError.ClientError(errorCode.UPDATE_ERROR);

  return result;
};
