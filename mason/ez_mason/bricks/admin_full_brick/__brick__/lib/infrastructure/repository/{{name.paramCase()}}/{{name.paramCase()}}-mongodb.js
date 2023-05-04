const mongoose = require("mongoose");
const collections = require("../../database/mongodb/collections");
const schemas = require("../../database/mongodb/schemas");

module.exports = class {{name.pascalCase()}}MongodbRepository {
  constructor () {
    this.model = mongoose.model(collections.{{name.camelCase()}}, schemas.{{name.camelCase()}});
  }

  async getCount (condition) {
    return await this.model.countDocuments(condition);
  }

  async selectMany ({ condition, ability, limit, skip, sort, project }) {
    let model = this.model;
    if (ability) {
      model = this.model.accessibleBy(ability);
    }

    if (!project) project = { _id: 0, __v: 0 };
    if (!sort) sort = { created_at: -1 };

    return await model
      .find(condition)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .select(project);
  }

  async selectManyAggregate ({ condition, ability, limit, skip, sort, project }) {
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
    return await this.model.findOneAndUpdate(condition, updateData, { new: true });
  }

  async updateMany (condition, updateData) {
    return await this.model.updateMany(condition, updateData, { new: true });
  }

  async removeOne (condition) {
    return await this.model.deleteOne(condition);
  }

  async removeMany (condition) {
    return await this.model.deleteMany(condition);
  }
};
