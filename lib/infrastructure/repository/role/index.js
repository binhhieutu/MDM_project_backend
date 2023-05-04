const RoleRepo = require("../../../domain/repository/config-repository");
const RoleMongodbRepo = require("./role-mongodb");
const RoleRedisRepo = require("./role-redis");

module.exports = class extends RoleRepo {
  constructor () {
    super();
    this.mongodbRepo = new RoleMongodbRepo();
    this.redisRepo = new RoleRedisRepo();
  }

  // Mongodb
  async initData () {
    return await this.mongodbRepo.initData();
  }

  async getCount (condition) {
    return await this.mongodbRepo.getCount(condition);
  }

  async selectMany (values) {
    return await this.mongodbRepo.selectMany(values);
  }

  async selectManyAggregate (values) {
    return await this.mongodbRepo.selectManyAggregate(values);
  }

  async selectOne (values) {
    return await this.mongodbRepo.selectOne(values);
  }

  async create (data) {
    return await this.mongodbRepo.create(data);
  }

  async updateOne (condition, updateData) {
    return await this.mongodbRepo.updateOne(condition, updateData);
  }

  async updateMany (condition, updateData) {
    return await this.mongodbRepo.updateMany(condition, updateData);
  }

  async removeOne (condition) {
    return await this.mongodbRepo.removeOne(condition);
  }

  async removeMany (condition) {
    return await this.mongodbRepo.removeMany(condition);
  }
};
