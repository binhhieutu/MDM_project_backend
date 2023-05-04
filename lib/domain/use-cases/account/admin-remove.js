const AccountRepo = require("../../repository/account-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ accountRepo = AccountRepo.prototype }, id) => {
  const result = await accountRepo.removeOne({ id });
  if (!result) throw new customError.ClientError(errorCode.DELETE_ERROR);

  return result;
};
