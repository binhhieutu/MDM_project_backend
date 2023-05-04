const ConfigRepo = require("../../../domain/repository/config-repository");
const ConfigMongodbRepo = require("./config-mongodb");
const ConfigRedisRepo = require("./config-redis");

module.exports = class extends ConfigRepo {
  constructor () {
    super();
    this.mongodbRepo = new ConfigMongodbRepo();
    this.redisRepo = new ConfigRedisRepo();
  }
  // Mongodb

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

  async getConfig () {
    const redisConfig = await this.redisRepo.getConfig();
    if (redisConfig) { return redisConfig; }

    const dbConfig = await this.mongodbRepo.selectOneByCondition();
    if (dbConfig) {
      await this.redisRepo.setConfig(dbConfig);
    }

    return dbConfig;
  }
};
