const {{name.camelCase()}}Mockup = require("../../mockup/response/{{name.paramCase()}}/get-list.json");
// const {{name.pascalCase()}}Repo = require("../../repository/{{name.paramCase()}}-repository");

module.exports = async () => {
  return {{name.camelCase()}}Mockup;
};
