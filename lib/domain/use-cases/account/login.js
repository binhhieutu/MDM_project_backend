const AccountRepo = require("../../repository/account-repository");
const crypto = require("../../../core/utils/crypto");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const { ACCOUNT_STATUS } = require("../../../core/app-helpers/constant/account-constant");

module.exports = async ({ accountRepo = AccountRepo.prototype }, username, password, ip) => {
  const account = await accountRepo.updateOne(
    { username, password: crypto.sha256(password) },
    {
      is_login: true,
      $addToSet: { login_info: { time: new Date(), ip } },
    }
  );

  if (!account) throw new customError.ClientError(errorCode.LOGIN_FAIL);
  if (account && account.status !== ACCOUNT_STATUS.active) { throw new customError.ClientError(errorCode.INACTIVE_ACCOUNT); }

  return account;
};
