const UserRepo = require("../../repository/user-repository");

module.exports = async function getLoginUser ({ userRepo = UserRepo.prototype }, phone) {
  const condition = { phone };
  const user = await userRepo.postgresSelectOne(condition);

  return user;
};
