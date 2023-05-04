const UserRepo = require("../../../domain/repository/user-repository");
const UserMongodbRepo = require("./user-mongodb");
const UserMssqlRepo = require("./user-mssql");
const UserPostgresRepo = require("./user-postgres");

module.exports = class extends UserRepo {
  constructor () {
    super();
    this.mongodbRepo = new UserMongodbRepo();
    this.mssqlRepo = new UserMssqlRepo();
    this.postgresRepo = new UserPostgresRepo();
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

  /* MSSQL */

  async mssqlQuery (queryText, values) {
    return this.mssqlRepo.query(queryText, values);
  }

  async mssqlSelectMany (condition) {
    return this.mssqlRepo.selectMany(condition);
  }

  async mssqlSelectOne (condition) {
    return this.mssqlRepo.selectOne(condition);
  }

  async mssqlInsert (data) {
    return this.mssqlRepo.insert(data);
  }

  async mssqlUpdate (condition, data) {
    return this.mssqlRepo.update(condition, data);
  }

  /* POSTGRES */

  async postgresQuery (queryText, values) {
    return await this.postgresRepo.query(queryText, values);
  }

  async postgresSelectMany (condition) {
    return await this.postgresRepo.selectMany(condition);
  }

  async postgresSelectOne (condition) {
    return await this.postgresRepo.selectOne(condition);
  }

  async postgresInsert (data) {
    return await this.postgresRepo.insert(data);
  }

  async postgresUpdate (condition, data) {
    return await this.postgresRepo.update(condition, data);
  }

  async postgresRemove (condition) {
    return await this.postgresRepo.remove(condition);
  }
};
