const AccountRepo = require("../../repository/account-repository");

module.exports = async ({ accountRepo = AccountRepo.prototype }, user, ip) => {
  await accountRepo.updateOne(
    { username: user.username },
    {
      is_login: false,
      $addToSet: { logout_info: { time: new Date(), ip } },
    }
  );
};
