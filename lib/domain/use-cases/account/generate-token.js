const jwt = require("../../../core/utils/jwt");
const TokenModel = require("../../models/account/token-model");

module.exports = (user) => {
  const info = new TokenModel(user);

  return jwt.generateTokenAdmin(info.toJSON());
};
