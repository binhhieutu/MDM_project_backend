const errorCode = require("../../error/error-code");
const { PARAMS_TEXT } = require("../text/data-text");
// const { ACTION } = require("../constant/data-constant");

function checkReadPermission (ability) {
  // if (!ability.can(ACTION.read)) return false;

  return true;
}

function checkCreatePermission (ability) {
  // if (!ability.can(ACTION.create)) return false;

  return true;
}

function checkUpdatePermission (ability) {
  // if (!ability.can(ACTION.update)) return false;

  return true;
}

function checkDeletePermission (ability) {
  // if (!ability.can(ACTION.delete)) return false;

  return true;
}

function checkRequireParams (requireParams, params) {
  const err = errorCode.MISSING_PARAMS_ERROR;

  if (!params) { return err; }
  for (let index = 0; index < requireParams.length; index++) {
    const key = requireParams[index];
    if (!params[key]) {
      const text = PARAMS_TEXT[key] || key;
      err.message = `Dữ liệu (${text}) không hợp lệ`;

      return err;
    }
  }
}

module.exports = {
  checkCreatePermission,
  checkUpdatePermission,
  checkDeletePermission,
  checkReadPermission,
  checkRequireParams,
};
