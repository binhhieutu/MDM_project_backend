const { pool } = require("../../database/postgres/connection");
const table = require("../../database/postgres/table");

module.exports = class PostgresRepository {
  #table = table.account;

  async query (queryText = "", values = []) {
    try {
      const result = await pool.query(queryText, values);

      return result.rows;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      pool.release(true);
    }
  }

  async selectMany (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=$${index + 1}`)
      .join(" AND ");

    const queryText = `SELECT * FROM ${this.#table} WHERE ${columns}`;

    return await this.query(queryText, values);
  }

  async selectOne (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=$${index + 1}`)
      .join(" AND ");

    const queryText = `SELECT * FROM ${this.#table} WHERE ${columns}`;

    const result = await this.query(queryText, values);
    if (result && result.length > 0) return result[0];
  }

  async insert (data) {
    const columnName = Object.keys(data).toString();
    const columns = Object.keys(data).map((item, index) => `$${index + 1}`);
    const values = Object.values(data);

    const queryText = `INSERT INTO ${this.#table}(${columnName}) VALUES(${columns}) RETURNING *`;

    return await this.query(queryText, values);
  }

  async update (condition, data) {
    const values = [].concat(Object.values(data), Object.values(condition));

    let index = 1;
    const columnData = [];
    const columnCondition = [];

    Object.keys(data).forEach((item) => {
      columnData.push(`${item}=$${index}`);
      index++;
    });
    columnData.join(" AND ");

    Object.keys(condition).forEach((item) => {
      columnCondition.push(`${item}=$${index}`);
      index++;
    });
    columnCondition.join(" AND ");

    const queryText = `UPDATE ${this.#table} SET ${columnData} WHERE ${columnCondition}`;

    await this.query(queryText, values);
  }

  async remove (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=$${index + 1}`)
      .join(" AND ");

    const queryText = `DELETE FROM ${this.#table} WHERE ${columns}`;

    const result = await this.query(queryText, values);
    if (result.length > 0) return result[0];
  }
};
