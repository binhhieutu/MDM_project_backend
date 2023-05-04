const sql = require("mssql");
const table = require("../../database/mssql/table");

module.exports = class UserMssqlRepo {
  #table = table.user;

  async query (queryText, values = []) {
    const request = new sql.Request();
    try {
      for (const index in values) {
        request.input(index, values[index]);
      }

      return await request.query(queryText);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async selectMany (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=@${index}`)
      .join(" AND ");

    const queryText = `SELECT * FROM ${this.#table} WHERE ${columns}`;
    const result = await this.query(queryText, values);

    return result && result.recordset;
  }

  async selectOne (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=@${index}`)
      .join(" AND ");

    const queryText = `SELECT TOP 1 * FROM ${this.#table} WHERE ${columns}`;

    const result = await this.query(queryText, values);

    return result && result.recordset && result.recordset[0];
  }

  async insert (data) {
    const columnName = Object.keys(data).toString();
    const columns = Object.keys(data).map((item, index) => `@${index}`);
    const values = Object.values(data);

    const queryText = `INSERT INTO ${this.#table}(${columnName}) VALUES(${columns})`;
    await this.query(queryText, values);
  }

  async update (condition, data) {
    const values = [].concat(Object.values(data), Object.values(condition));

    let index = 0;
    const columnData = [];
    const columnCondition = [];

    Object.keys(data).forEach((item) => {
      columnData.push(`${item}=@${index}`);
      index++;
    });
    columnData.join(" AND ");

    Object.keys(condition).forEach((item) => {
      columnCondition.push(`${item}=@${index}`);
      index++;
    });
    columnCondition.join(" AND ");

    const queryText = `UPDATE ${this.#table} SET ${columnData} WHERE ${columnCondition}`;

    return await this.query(queryText, values);
  }

  async remove (condition) {
    const values = Object.values(condition);
    const columns = Object.keys(condition)
      .map((item, index) => `${item}=@${index}`)
      .join(" AND ");

    if (columns.length === 0) return;

    const queryText = `DELETE FROM ${this.#table} WHERE ${columns}`;

    return await this.query(queryText, values);
  }
};
