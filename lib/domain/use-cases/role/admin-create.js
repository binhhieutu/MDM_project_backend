const RoleRepo = require("../../repository/role-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ roleRepo = RoleRepo.prototype }, data = {}) => {
  const existed = await roleRepo.selectOne({ condition: { name: data.name } });
  if (existed) throw new customError.ClientError(errorCode.DATA_EXIST_ERROR);

  const result = await roleRepo.create(data);
  if (!result) throw new customError.ClientError(errorCode.CREATE_ERROR);

  return result;
};
