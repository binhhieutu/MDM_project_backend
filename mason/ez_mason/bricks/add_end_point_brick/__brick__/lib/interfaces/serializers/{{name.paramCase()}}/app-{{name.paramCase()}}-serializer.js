module.exports = class {
  static toAppJson (item) {
    return item;
  }

  static getListResData (list = []) {
    const items = list.map(item => this.toAppJson(item));

    return { items };
  }
};
