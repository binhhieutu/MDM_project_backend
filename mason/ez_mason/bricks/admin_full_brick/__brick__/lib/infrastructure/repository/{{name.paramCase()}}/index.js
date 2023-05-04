const {{name.pascalCase()}}Repo = require("../../../domain/repository/{{name.paramCase()}}-repository");
const {{name.pascalCase()}}MongodbRepo = require("./{{name.paramCase()}}-mongodb");
const {{name.pascalCase()}}RedisRepo = require("./{{name.paramCase()}}-redis");

module.exports = class extends {{name.pascalCase()}}Repo {
  constructor () {
    super();
    this.mongodbRepo = new {{name.pascalCase()}}MongodbRepo();
    this.redisRepo = new {{name.pascalCase()}}RedisRepo();
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
};
