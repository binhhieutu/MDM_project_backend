const jwt = require("../../../core/utils/jwt");

module.exports = async (data) => {
  return jwt.generateTokenApp({
    device: data.device,
    user_id: data.user_id,
  });
};
