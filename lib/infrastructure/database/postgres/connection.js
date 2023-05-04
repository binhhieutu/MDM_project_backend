const { Pool } = require("pg");
const pool = new Pool(global.gConfig.database.pg);

pool.on("connect", () => {
  console.log("PostgresSQL CONNECTED");
});

pool.on("error", (err, client) => {
  if (!err) {
    client.release(true);
  }
});

global.process.on("SIGINT", function () {
  pool.end(() => {
    global.process.exit(0);
  });
});

async function connect () {
  try {
    const client = await pool.connect();
    client.release();
  } catch (error) {
    console.log(error.stack);
  }
}

module.exports = { connect, pool };
