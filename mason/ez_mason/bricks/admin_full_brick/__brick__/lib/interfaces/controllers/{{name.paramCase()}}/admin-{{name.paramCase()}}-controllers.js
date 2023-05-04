const Admin{{name.pascalCase()}}Serializer = require("../../serializers/{{name.paramCase()}}/admin-{{name.paramCase()}}-serializer");

const getListUseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-get-list");
const generateCreateDataUseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-generate-create-data");
const generateUpdateDataUseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-generate-update-data");
const create{{name.pascalCase()}}UseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-create");
const update{{name.pascalCase()}}UseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-update");
const remove{{name.pascalCase()}}UseCase = require("../../../domain/use-cases/{{name.paramCase()}}/admin-remove");

const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");

async function get{{name.pascalCase()}}List (req, repository) {
  const list = await getListUseCase(repository, req.query, req.ability);

  return Admin{{name.pascalCase()}}Serializer.getListResData(list);
}

async function create{{name.pascalCase()}} (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const data = generateCreateDataUseCase(req.body, req.user);
  const result = await create{{name.pascalCase()}}UseCase(repository, data);

  return AdminAccountSerializer.getDetailResData(result);
}

async function update{{name.pascalCase()}} (req, repository) {
  if (!dataHelper.checkUpdatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const updateData = generateUpdateDataUseCase(req.body, req.user);
  const result = await update{{name.pascalCase()}}UseCase(repository, req.params.id, updateData);

  return AdminAccountSerializer.getDetailResData(result);
}

async function remove{{name.pascalCase()}} (req, repository) {
  if (!dataHelper.checkDeletePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  await remove{{name.pascalCase()}}UseCase(repository, req.params.id);
}

module.exports = {
  get{{name.pascalCase()}}List,
  create{{name.pascalCase()}},
  update{{name.pascalCase()}},
  remove{{name.pascalCase()}},
};
