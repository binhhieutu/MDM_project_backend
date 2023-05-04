const { DATE_FIELDS } = require("../../../core/app-helpers/constant/data-constant");
const { DMY_HMS } = require("../../../core/utils/constant");
const { dateToString } = require("../../../core/utils/util");
module.exports = class {
  static #fields = ["name", "actions", "subject", "created_at", "updated_at"];
  static toAdminJson (item) {
    const result = { id: item._id, conditions: item.conditions };
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
    return this.toAdminJson(item);
  }

  static getListResData (items = [], count = 1000, pagination) {
    return {
      limit: (pagination && pagination.limit) || 1000,
      page: (pagination && pagination.page) || 1,
      count,
      items: items.map((item) => this.toAdminJson(item)),
      fields: this.#fields,
    };
  }
};
