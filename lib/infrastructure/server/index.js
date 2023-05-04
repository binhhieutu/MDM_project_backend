require("log-timestamp")(function () {
  return "[" + new Date().toLocaleString("vi-VN") + "] %s";
});
require("events").EventEmitter.prototype._maxListeners = 200;
require("../../../config");

// const postgres = require("../database/postgres/connection");
// postgres.connect();
// const mssql = require("../database/mssql/connection");
// mssql.init();
const mongodb = require("../database/mongodb/connection");
mongodb.init();
const redisServer = require("../database/redis/connection");
redisServer.connect();

const app = require("../app");
const utils = require("../../core/utils/util");

const server = require("http").createServer(app);
const port = utils.normalizePort(global.gConfig.node_port);

server.listen(port, onListen);
server.on("error", onError);

function onError (error) {
  if (error.syscall !== "listen") throw error;

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      global.process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      global.process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListen () {
  console.log("\x1b[33m%s\x1b[0m", `ENV: ${global.gConfig.env}`);
  console.log("\x1b[36m%s\x1b[0m", `Server started: http://localhost:${port}`);
  global.gServiceLocator = require("../service-locator");
}

module.exports = server;
