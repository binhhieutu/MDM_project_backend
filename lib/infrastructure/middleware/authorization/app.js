const errorCode = require("../../../core/error/error-code");
const jwt = require("../../../core/utils/jwt");
const util = require("../../../core/utils/util");
const { userRepo } = require("../../repository");

const NO_AUTH_API = [
  "/app/configurations",
  "/app/users/login",
  "/app/users/send-otp",
  "/app/users/validation-otp",
  "/app/users/reset-password",
  "/app/users/register"

];

module.exports = async function authorizationApp (req, res, next) {
  const authorization = req.header("authorization");
  const device = req.header("device-info");

  if (!device || !util.isJsonString(device)) {
    return res.handleError(errorCode.MISSING_DEVICE_ERROR);
  }

  const dataToken = jwt.decodedToken(authorization);

  const user = await userRepo.selectOne({ id: dataToken && dataToken.user_id });
  if (!NO_AUTH_API.includes(req.path) && !user) {
    return res.handleError(errorCode.SESSION_TIMEOUT);
  }
  req.user = user;
  req.device = device ? JSON.parse(device) : {};

  return next();
};
