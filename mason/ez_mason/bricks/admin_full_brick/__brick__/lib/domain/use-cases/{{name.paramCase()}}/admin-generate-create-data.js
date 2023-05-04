const customError = require("../../../core/error/custom-error");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");
const { REQUIRE_KEY } = require("../../../core/app-helpers/constant/{{name.paramCase()}}-constant");

module.exports = (body, user) => {
  const error = dataHelper.checkRequireParams(REQUIRE_KEY.create, body);
  if (error) throw new customError.ClientError(error);

  const data = body;
  data.created_by = user.username;

  return data;
};
