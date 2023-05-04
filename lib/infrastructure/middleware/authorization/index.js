const errorCode = require("../../../core/error/error-code");
const util = require("../../../core/utils/util");
const authorizationApp = require("./app");
const authorizationAdmin = require("./admin");
const authorizationPublic = require("./public");

module.exports = async function authorization (req, res, next) {
  const token = req.header("token") || req.query.token;
  const product = req.header("product") || req.query.product;
  const auth = global.gConfig.auth[product];

  if (!auth) {
    return res.handleError(errorCode.INVALID_PRODUCT_ERROR);
  }
  if (token !== auth.token) {
    return res.handleError(errorCode.INVALID_TOKEN_ERROR);
  }

  req.token = token;
  req.product = product;
  req.user_ip = await util.getIpAddress(req);

  if (product === global.gConfig.auth.app.product) return authorizationApp(req, res, next);
  else if (product === global.gConfig.auth.admin.product) return authorizationAdmin(req, res, next);
  else return authorizationPublic(req, res, next);
};
