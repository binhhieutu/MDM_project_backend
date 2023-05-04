const { DEFAULT_NAME, MALE_TEXT, FEMALE_TEXT } = require("../../../core/app-helpers/text/user-text");
const { MALE, DEFAULT_AVATAR } = require("../../../core/app-helpers/constant/user-constant");

module.exports = class {
  static toAdminJson (user) {
    return {
      id: user.id || "",
      username: user.username,
      phone: user.phone,
      name: user.name || DEFAULT_NAME,
      gender: user.gender === MALE ? FEMALE_TEXT : MALE_TEXT,
      active: user.active,
      avatar: user.avatar || DEFAULT_AVATAR,
    };
  }

  static loginResData (user, token) {
    return { user: this.toAdminJson(user), token };
  }

  static getDetailResData (user) {
    return { item: this.toAdminJson(user) };
  }

  static getListResData (list = []) {
    const items = list.map(item => this.toAdminJson(item));

    return { items };
  }
};
