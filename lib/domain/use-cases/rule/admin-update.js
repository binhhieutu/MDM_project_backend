
const RuleRepo = require("../../repository/rule-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ ruleRepo = RuleRepo.prototype }, id, updateData) => {
  const result = await ruleRepo.updateOne({ id }, updateData);
  if (!result) throw new customError.ClientError(errorCode.UPDATE_ERROR);

  return result;
};
