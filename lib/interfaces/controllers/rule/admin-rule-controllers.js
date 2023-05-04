const AdminRuleSerializer = require("../../serializers/rule/admin-rule-serializer");

const getListUseCase = require("../../../domain/use-cases/rule/admin-get-list");
const generateCreateDataUseCase = require("../../../domain/use-cases/rule/admin-generate-create-data");
const generateUpdateDataUseCase = require("../../../domain/use-cases/rule/admin-generate-update-data");
const createRuleUseCase = require("../../../domain/use-cases/rule/admin-create");
const updateRuleUseCase = require("../../../domain/use-cases/rule/admin-update");
const removeRuleUseCase = require("../../../domain/use-cases/rule/admin-remove");
const initRuleUseCase = require("../../../domain/use-cases/rule/init");

const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");

/**
 * It gets a list of rules from the database, and returns them in a format that the frontend can use
 * @param req - The request object
 * @param repository - The repository object that is used to interact with the database.
 */
async function initRule (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY);
  }

  return await initRuleUseCase(repository);
}

async function getRuleList (req, repository) {
  const list = await getListUseCase(repository, req.query, req.ability);

  return AdminRuleSerializer.getListResData(list);
}

async function createRule (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const data = generateCreateDataUseCase(req.body, req.user);
  await createRuleUseCase(repository, data);
}

async function updateRule (req, repository) {
  if (!dataHelper.checkUpdatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const updateData = generateUpdateDataUseCase(req.body, req.user);
  await updateRuleUseCase(repository, req.params.id, updateData);
}

async function removeRule (req, repository) {
  if (!dataHelper.checkDeletePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  await removeRuleUseCase(repository, req.params.id);
}

module.exports = {
  getRuleList,
  createRule,
  updateRule,
  removeRule,
  initRule,
};
