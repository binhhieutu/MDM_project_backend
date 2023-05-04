const { LOGIN_METHOD } = require("../../../core/app-helpers/constant/user-constant");
const UserRepo = require("../../repository/user-repository");

module.exports = async function ({ userRepo = UserRepo.prototype }, device, facebookId) {
  const existsUser = await userRepo.selectOne({ google_id: facebookId });
  if (!existsUser) {
    return await userRepo.create({
      facebook_id: facebookId,
      device: {
        device_id: device.device_id,
        app_version: device.app_version,
        os_version: device.app_version,
        platform: device.platform,
        active: true,
        login_method: LOGIN_METHOD.facebook,
      },
    });
  }

  return await userRepo.updateOne({ facebook_id: facebookId }, {
    device: {
      device_id: device.id,
      app_version: device.app_version,
      os_version: device.app_version,
      platform: device.platform,
      active: true,
      login_method: LOGIN_METHOD.facebook,
    },
  });
};
