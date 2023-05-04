const RuleRepo = require("../../repository/rule-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ ruleRepo = RuleRepo.prototype }, id) => {
  const result = await ruleRepo.removeOne({ id });
  if (!result) throw new customError.ClientError(errorCode.DELETE_ERROR);

  return result;
};
