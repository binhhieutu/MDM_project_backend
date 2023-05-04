const { DMY_HMS } = require("../../../core/utils/constant");
const { dateToString } = require("../../../core/utils/util");
const { DATE_FIELDS } = require("../../../core/app-helpers/constant/data-constant");

module.exports = class {
  static #fields = ["name", "username", "phone", "is_login", "status", "created_at", "updated_at"];
  static toAdminJson (item) {
    const result = { id: item.id };
    this.#fields.forEach(col => {
      if (DATE_FIELDS.includes(col)) {
        result[col] = item[col] ? dateToString(item[col], DMY_HMS) : "";
      } else {
        result[col] = item[col];
      }
    });

    return result;
  }

  static getDetailResData (item) {
    return { item: this.toAdminJson(item) };
  }

  static getListResData (items = [], count = 0, pagination) {
    return {
      limit: (pagination && pagination.limit) || 0,
      page: (pagination && pagination.page) || 1,
      count,
      items: items.map((item) => this.toAdminJson(item)),
      fields: this.#fields,
    };
  }

  static loginResData (user, token) {
    return { user: this.toAdminJson(user), token };
  }
};
