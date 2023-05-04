const RuleRepo = require("../../../domain/repository/rule-repository");
const RuleMongodbRepo = require("./rule-mongodb");
const RuleRedisRepo = require("./rule-redis");

module.exports = class extends RuleRepo {
  constructor () {
    super();
    this.mongodbRepo = new RuleMongodbRepo();
    this.redisRepo = new RuleRedisRepo();
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
