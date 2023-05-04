const UserRepo = require("../../repository/user-repository");

module.exports = async function getLoginUser ({ userRepo = UserRepo.prototype }, phone) {
  const condition = { Phone: phone };
  const user = await userRepo.mssqlSelectOne(condition);

  return user;
};
