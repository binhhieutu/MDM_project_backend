const { DATE_FIELDS } = require("../../../core/app-helpers/constant/data-constant");
const { dateToString } = require("../../../core/utils/util");
const { DMY_HMS } = require("../../../core/utils/constant");
module.exports = class {
  static #fields = ["created_at", "updated_at"];
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

  static getListResData (items = [], count = 1000, pagination) {
    return {
      limit: (pagination && pagination.limit) || 1000,
      page: (pagination && pagination.page) || 1,
      count,
      fields: this.#fields,
      items: items.map((item) => this.toAdminJson(item)),
    };
  }
};
