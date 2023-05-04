const AccountRepo = require("../../repository/account-repository");

module.exports = async ({ accountRepo = AccountRepo.prototype }, condition) => {
  return await accountRepo.getCount({ condition });
};
