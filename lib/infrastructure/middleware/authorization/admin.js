const errorCode = require("../../../core/error/error-code");
const jwt = require("../../../core/utils/jwt");
const { accountRepo } = require("../../repository");

const NO_AUTH_API = ["/admin/account/login", "/admin/account/init"];

module.exports = async function authorizationAdmin (req, res, next) {
  const authorization = req.header("authorization");

  const dataToken = jwt.decodedToken(authorization);
  const user = await accountRepo.selectOne({ condition: { username: dataToken && dataToken.username } });

  if (!NO_AUTH_API.includes(req.path) && (!user || !user.rules)) {
    return res.handleError(errorCode.SESSION_TIMEOUT);
  }

  req.user = user;
  req.device = {};

  return next();
};
