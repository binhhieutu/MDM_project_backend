module.exports = class TokenModel {
  constructor ({ username, rules, role, product }) {
    this.rules = rules || [];
    this.role = role || "user";
    this.product = product;
    this.username = username;
  }

  toJSON () {
    return {
      rules: this.rules,
      role: this.role,
      product: this.rules,
      username: this.username,
    };
  }
};
