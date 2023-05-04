const { DEFAULT_NAME } = require("../../../core/app-helpers/text/user-text");
const { DEFAULT_AVATAR } = require("../../../core/app-helpers/constant/user-constant");

module.exports = class {
  static toProfileJson (user) {
    return {
      id: user.id || "",
      phone: user.phone || "",
      name: user.name || DEFAULT_NAME,
      gender: user.gender || "",
      active: user.active,
      avatar: user.avatar || DEFAULT_AVATAR,
    };
  }

  static loginResData (accessToken, user) {
    return { accessToken, user: this.toProfileJson(user) };
  }
};
