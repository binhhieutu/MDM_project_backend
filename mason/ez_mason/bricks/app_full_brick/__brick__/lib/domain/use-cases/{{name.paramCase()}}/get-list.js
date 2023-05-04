const {{name.pascalCase()}}Repo = require("../../repository/{{name.paramCase()}}-repository");

module.exports = async ({ {{name.camelCase()}}Repo = {{name.pascalCase()}}Repo.prototype }, condition) => {
  return await {{name.camelCase()}}Repo.selectMany({ condition });
};
