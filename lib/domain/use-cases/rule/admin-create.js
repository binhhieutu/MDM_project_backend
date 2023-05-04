const RuleRepo = require("../../repository/rule-repository");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

module.exports = async ({ ruleRepo = RuleRepo.prototype }, data = {}) => {
  const existed = await ruleRepo.selectOne({ condition: { name: data.name } });
  if (existed) throw new customError.ClientError(errorCode.DATA_EXIST_ERROR);

  const result = await ruleRepo.create(data);
  if (!result) throw new customError.ClientError(errorCode.CREATE_ERROR);

  return result;
};
