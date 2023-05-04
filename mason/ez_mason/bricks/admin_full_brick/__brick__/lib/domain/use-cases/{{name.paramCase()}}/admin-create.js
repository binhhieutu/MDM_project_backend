const {{name.pascalCase()}}Repo = require("../../repository/{{name.paramCase()}}-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ {{name.camelCase()}}Repo = {{name.pascalCase()}}Repo.prototype }, data = {}) => {
  const existed = await {{name.camelCase()}}Repo.selectOne({ condition: { code: data.code } });
  if (existed) throw new customError.ClientError(errorCode.DATA_EXIST_ERROR);

  const result = await {{name.camelCase()}}Repo.create(data);
  if (!result) throw new customError.ClientError(errorCode.CREATE_ERROR);

  return result;
};
