const sql = require("mssql");

const config = global.gConfig.database.mssql;

async function init () {
  try {
    await sql.connect({
      ...config,
      beforeConnect: (conn) =>
        conn.once("connect", () => {
          console.log("Mssql CONNECTED");
        }),
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { init };
