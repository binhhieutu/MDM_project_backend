const RuleRepo = require("../../repository/rule-repository");

module.exports = async ({ ruleRepo = RuleRepo.prototype }, condition, ability) => {
  return await ruleRepo.selectMany({ condition, ability, limit: 1000 });
};
