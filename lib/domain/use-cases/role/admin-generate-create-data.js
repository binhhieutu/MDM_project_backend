const customError = require("../../../core/error/custom-error");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");
const { REQUIRE_KEY } = require("../../../core/app-helpers/constant/role-constant");

module.exports = (data = {}, user) => {
  const error = dataHelper.checkRequireParams(REQUIRE_KEY.create, data);
  if (error) throw new customError.ClientError(error);

  data.created_by = user.username;

  return data;
};
