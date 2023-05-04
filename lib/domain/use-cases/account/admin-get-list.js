const AccountRepo = require("../../repository/account-repository");

module.exports = async ({ accountRepo = AccountRepo.prototype }, condition, pagination, ability) => {
  return await accountRepo.selectManyAggregate({
    condition,
    ability,
    limit: pagination.limit,
    skip: pagination.skip,
  });
};
