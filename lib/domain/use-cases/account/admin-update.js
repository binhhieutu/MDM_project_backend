
const AccountRepo = require("../../repository/account-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ accountRepo = AccountRepo.prototype }, id, updateData) => {
  const result = await accountRepo.updateOne({ id }, updateData);
  if (!result) throw new customError.ClientError(errorCode.UPDATE_ERROR);

  return result;
};
