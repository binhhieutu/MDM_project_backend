const UserRepo = require("../../repository/user-repository");

module.exports = async function ({ userRepo = UserRepo.prototype }, userId) {
  return await userRepo.selectOne({ id: userId });
};
