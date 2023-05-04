
module.exports = class {
  async initData () {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async getCount (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectMany ({ condition, ability, limit, skip, sort, project }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectManyAggregate ({ condition, ability, limit, skip, sort, project }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR");
  }

  async selectOne ({ condition, ability }) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async create (data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async updateOne (condition, updateData) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async updateMany (condition, updateData) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async removeOne (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async removeMany (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  /* MSSQL */
  async mssqlQuery (queryText, values = []) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async mssqlSelectMany (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async mssqlSelectOne (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async mssqlInsert (data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async mssqlUpdate (condition, data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async mssqlRemove (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  /* Postgres */

  async postgresQuery (queryText = "", values = []) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async postgresSelectMany (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async postgresSelectOne (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async postgresInsert (data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async postgresUpdate (condition, data) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }

  async postgresRemove (condition) {
    throw new Error("METHOD_NOT_IMPLEMENTED_ERROR"); ;
  }
};
