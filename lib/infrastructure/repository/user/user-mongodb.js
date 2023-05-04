const mongoose = require("mongoose");
const collections = require("../../database/mongodb/collections");
const schemas = require("../../database/mongodb/schemas");

module.exports = class UserMongodbRepository {
  constructor () {
    this.model = mongoose.model(collections.user, schemas.user);
  }

  async getCount (condition) {
    return await this.model.countDocuments(condition);
  }

  async selectMany ({ condition, ability, sort }) {
    let model = this.model;
    if (ability) {
      model = this.model.accessibleBy(ability);
    }

    return await model
      .find(condition).select({ __v: 0 })
      .sort(sort);
  }

  async selectManyAggregate ({ condition, ability, sort, project, limit, skip }) {
    let model = this.model;
    if (ability) {
      model = this.model.accessibleBy(ability);
    }

    const aggregate = model.aggregate([
      { $match: condition },
      { $project: { __v: 0, _id: 0 } },
      { $sort: { created_at: -1 } }
    ]);

    if (skip) aggregate.skip(skip);
    if (limit) aggregate.limit(limit);
    if (sort) aggregate.sort(sort);
    if (project) aggregate.project(project);

    return await aggregate.exec();
  }

  async selectOne ({ condition, ability }) {
    let model = this.model;
    if (ability) {
      model = this.model.accessibleBy(ability);
    }

    return await model.findOne(condition).select({ _id: 0, __v: 0 });
  }

  async create (data) {
    return await this.model.create(data);
  }

  async updateOne (condition, updateData) {
    return await this.model.findOneAndUpdate(condition, updateData);
  }

  async updateMany (condition, updateData) {
    return await this.model.updateMany(condition, updateData);
  }

  async removeOne (condition) {
    return await this.model.deleteOne(condition);
  }

  async removeMany (condition) {
    return await this.model.deleteMany(condition);
  }
};
