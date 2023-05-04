const AccountRepo = require("../../repository/account-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ accountRepo = AccountRepo.prototype }, data = {}) => {
  const existed = await accountRepo.selectOne({ condition: { username: data.username } });
  if (existed) throw new customError.ClientError(errorCode.DATA_EXIST_ERROR);

  const result = await accountRepo.create(data);
  if (!result) throw new customError.ClientError(errorCode.CREATE_ERROR);

  return result;
};
