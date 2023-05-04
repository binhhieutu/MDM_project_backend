const {{name.pascalCase()}}Repo = require("../../repository/{{name.paramCase()}}-repository");

module.exports = async ({ {{name.camelCase()}}Repo = {{name.pascalCase()}}Repo.prototype }, condition, ability) => {
  return await {{name.camelCase()}}Repo.selectMany({ condition, ability, limit: 1000 });
};
