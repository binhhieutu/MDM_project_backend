const crypto = require("../../../core/utils/crypto");
const customError = require("../../../core/error/custom-error");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");
const { REQUIRE_KEY, DEFAULT_PASSWORD } = require("../../../core/app-helpers/constant/account-constant");

module.exports = (body, user) => {
  const error = dataHelper.checkRequireParams(REQUIRE_KEY.create, body);
  if (error) throw new customError.ClientError(error);

  const data = body;
  data.created_by = user.username;
  data.password = crypto.sha256(DEFAULT_PASSWORD);

  return data;
};
