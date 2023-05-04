module.exports = class UserMongodbModel {
  constructor (id = "", username = "", phone = "", active = false, name = "", gender = "", avatar = "") {
    this.id = id;
    this.username = username;
    this.phone = phone;
    this.name = name;
    this.gender = gender;
    this.active = active;
    this.avatar = avatar;
  }
};
