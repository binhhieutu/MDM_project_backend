const repository = require("./repository");

function buildLocatorService () {
  return { repository };
}

module.exports = buildLocatorService();
