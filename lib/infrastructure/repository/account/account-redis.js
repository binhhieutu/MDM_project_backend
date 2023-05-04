
// const { EXAMPLE_KEY } = require("../../database/redis/key");
const redisInstance = require("../../database/redis/connection");

module.exports = class AccountRedisRepo {
  #instance = redisInstance;
};
