const RuleRepo = require("../../repository/rule-repository");

module.exports = async ({ ruleRepo = RuleRepo.prototype }) => {
  return await ruleRepo.initData();
};
