const botLog = require("../../../core/utils/bot-log");
const redis = require("redis");

const redisServer = redis.createClient(global.gConfig.cache.redis);
redisServer.on("connect", function () {
  global.redisConnected = true;
  console.log("\x1b[36m%s\x1b[0m", "Redis CONNECTED");
});

redisServer.on("error", function (error) {
  global.redisConnected = false;
  botLog.handleRedisError(error);
});

module.exports = redisServer;
