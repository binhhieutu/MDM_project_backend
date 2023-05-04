
const {{name.pascalCase()}}Repo = require("../../repository/{{name.paramCase()}}-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ {{name.camelCase()}}Repo = {{name.pascalCase()}}Repo.prototype }, id, updateData) => {
  const result = await {{name.camelCase()}}Repo.updateOne({ id }, updateData);
  if (!result) throw new customError.ClientError(errorCode.UPDATE_ERROR);

  return result;
};
