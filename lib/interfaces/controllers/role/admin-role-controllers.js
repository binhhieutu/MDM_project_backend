const AdminRoleSerializer = require("../../serializers/role/admin-role-serializer");

const getListUseCase = require("../../../domain/use-cases/role/admin-get-list");
const generateCreateDataUseCase = require("../../../domain/use-cases/role/admin-generate-create-data");
const generateUpdateDataUseCase = require("../../../domain/use-cases/role/admin-generate-update-data");
const createRoleUseCase = require("../../../domain/use-cases/role/admin-create");
const updateRoleUseCase = require("../../../domain/use-cases/role/admin-update");
const removeRoleUseCase = require("../../../domain/use-cases/role/admin-remove");
const initRoleUseCase = require("../../../domain/use-cases/role/init");

const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");

/**
 * InitUseCase is called with repository as an argument, and the result of that call is returned.
 * @param req - The request object
 * @param repository - The repository that will be used to store the data.
 * @returns The initUseCase function is being returned.
 */
async function initRole (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY);
  }

  return await initRoleUseCase(repository);
}

async function getRoleList (req, repository) {
  const list = await getListUseCase(repository, req.query, req.ability);

  return AdminRoleSerializer.getListResData(list);
}

async function createRole (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const data = generateCreateDataUseCase(req.body, req.user);
  await createRoleUseCase(repository, data);
}

async function updateRole (req, repository) {
  if (!dataHelper.checkUpdatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const updateData = generateUpdateDataUseCase(req.body, req.user);
  await updateRoleUseCase(repository, req.params.id, updateData);
}

async function removeRole (req, repository) {
  if (!dataHelper.checkDeletePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  await removeRoleUseCase(repository, req.params.id);
}

module.exports = {
  getRoleList,
  createRole,
  updateRole,
  removeRole,
  initRole,
};
