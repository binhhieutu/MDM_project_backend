const getListUseCase = require("../../../domain/use-cases/{{name.paramCase()}}/get-list");
const App{{name.pascalCase()}}Serializer = require("../../serializers/{{name.paramCase()}}/app-{{name.paramCase()}}-serializer");

async function get{{name.pascalCase()}}List (req, repository) {
  const list = await getListUseCase(repository);

  return App{{name.pascalCase()}}Serializer.getListResData(list);
}

module.exports = {
  get{{name.pascalCase()}}List,
};