module.exports = class {
  static toAdminJson (item) {
    return {
      id: item.id || ""
    };
  }

  static getDetailResData (item) {
    return this.toAdminJson(item);
  }

  static getListResData (list = []) {
    const items = list.map(item => this.toAdminJson(item));

    return { items };
  }
};
