const { LOGIN_METHOD } = require("../../../core/app-helpers/constant/user-constant");
const UserRepo = require("../../repository/user-repository");

module.exports = async function ({ userRepo = UserRepo.prototype }, device, googleId) {
  const existsUser = await userRepo.selectOne({ google_id: googleId });
  if (!existsUser) {
    return await userRepo.create({
      google_id: googleId,
      device: {
        device_id: device.device_id,
        app_version: device.app_version,
        os_version: device.app_version,
        platform: device.platform,
        active: true,
        login_method: LOGIN_METHOD.google,
      },
    });
  }

  return await userRepo.updateOne({ google_id: googleId }, {
    device: {
      device_id: device.id,
      app_version: device.app_version,
      os_version: device.app_version,
      platform: device.platform,
      active: true,
      login_method: LOGIN_METHOD.google,
    },
  });
};
