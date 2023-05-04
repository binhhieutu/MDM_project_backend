const getListUseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-get-list");
const {{name.pascalCase()}}Serializer = require("../../serializers/{{name.paramCase()}}/admin-{{name.paramCase()}}-serializer");

async function get{{name.pascalCase()}}List (req, repository) {
  const list = await getListUseCase(repository);

  return {{name.pascalCase()}}Serializer.getListResData(list);
}

module.exports = { get{{name.pascalCase()}}List };