const { LOGIN_METHOD } = require("../../../core/app-helpers/constant/user-constant");
const UserRepo = require("../../repository/user-repository");

module.exports = async function ({ userRepo = UserRepo.prototype }, device, zaloId) {
  const existsUser = await userRepo.selectOne({ google_id: zaloId });
  if (!existsUser) {
    return await userRepo.create({
      zalo_id: zaloId,
      device: {
        device_id: device.device_id,
        app_version: device.app_version,
        os_version: device.app_version,
        platform: device.platform,
        active: true,
        login_method: LOGIN_METHOD.zalo,
      },
    });
  }

  return await userRepo.updateOne({ zalo_id: zaloId }, {
    device: {
      device_id: device.id,
      app_version: device.app_version,
      os_version: device.app_version,
      platform: device.platform,
      active: true,
      login_method: LOGIN_METHOD.zalo,
    },
  });
};
