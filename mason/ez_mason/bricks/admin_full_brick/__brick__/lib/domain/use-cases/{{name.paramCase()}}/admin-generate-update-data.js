const { REQUIRE_KEY } = require("../../../core/app-helpers/constant/{{name.paramCase()}}-constant");

module.exports = (body = {}, user) => {
  const updateData = { updated_by: user.username };
  REQUIRE_KEY.update.forEach((key) => (updateData[key] = body[key]));

  return updateData;
};
