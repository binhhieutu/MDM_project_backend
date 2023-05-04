const UserRepo = require("../../repository/user-repository");

module.exports = async function ({ userRepo = UserRepo.prototype }, phone) {
  let user = await userRepo.selectOne({ phone });
  if (!user) user = await userRepo.create({ phone, username: phone });

  return user;
};
