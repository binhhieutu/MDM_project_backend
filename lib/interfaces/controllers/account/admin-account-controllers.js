const AdminAccountSerializer = require("../../serializers/account/admin-account-serializer");

const getPaginationUseCase = require("../../../domain/use-cases/get-pagination");
const getListUseCase = require("../../../domain/use-cases/account/admin-get-list");
const getCountUseCase = require("../../../domain/use-cases/account/get-count");
const generateCreateDataUseCase = require("../../../domain/use-cases/account/admin-generate-create-data");
const generateUpdateDataUseCase = require("../../../domain/use-cases/account/admin-generate-update-data");
const createAccountUseCase = require("../../../domain/use-cases/account/admin-create");
const updateAccountUseCase = require("../../../domain/use-cases/account/admin-update");
const removeAccountUseCase = require("../../../domain/use-cases/account/admin-remove");
const loginUseCase = require("../../../domain/use-cases/account/login");
const generateTokenUseCase = require("../../../domain/use-cases/account/generate-token");
const logoutUseCase = require("../../../domain/use-cases/account/logout");

const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const dataHelper = require("../../../core/app-helpers/helpers/data-helper");

async function getAccountList (req, repository) {
  const pagination = getPaginationUseCase(req.query.page);
  const condition = {};
  const list = await getListUseCase(repository, condition, pagination, req.ability);
  const count = await getCountUseCase(repository, condition);

  return AdminAccountSerializer.getListResData(list, count, pagination);
}

async function createAccount (req, repository) {
  if (!dataHelper.checkCreatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const data = generateCreateDataUseCase(req.body, req.user);
  const result = await createAccountUseCase(repository, data);

  return AdminAccountSerializer.getDetailResData(result);
}

async function updateAccount (req, repository) {
  if (!dataHelper.checkUpdatePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  const updateData = generateUpdateDataUseCase(req.body, req.user);
  const result = await updateAccountUseCase(repository, req.params.id, updateData);

  return AdminAccountSerializer.getDetailResData(result);
}

async function removeAccount (req, repository) {
  if (!dataHelper.checkDeletePermission(req.ability)) {
    throw new customError.ClientError(errorCode.PERMISSION_DENY_ERROR);
  }

  await removeAccountUseCase(repository, req.params.id);
}

/**
 * "Login a user and return a token."
 *
 * The function is async, so it returns a promise
 * @param req.body.password : String
 * @param req.body.username : String
 * @param repository - The repository that will be used to fetch the user from the database.
 * @returns A promise that resolves to an object with the user and token.
 */
async function login (req, repository) {
  const user = await loginUseCase(repository, req.body.username, req.body.password, req.user_ip);
  const token = generateTokenUseCase(user);

  return AdminAccountSerializer.loginResData(user, token);
}

/**
 * "Logout the user."
 *
 * The function is named `logout` and it takes two arguments: `req` and `repository`
 * @param req - The request object.
 * @param repository - The repository that the use case will use to perform its operations.
 */
async function logout (req, repository) {
  await logoutUseCase(repository, req.user, req.user_ip);
}

module.exports = {
  getAccountList,
  createAccount,
  updateAccount,
  removeAccount,
  login,
  logout,
};
