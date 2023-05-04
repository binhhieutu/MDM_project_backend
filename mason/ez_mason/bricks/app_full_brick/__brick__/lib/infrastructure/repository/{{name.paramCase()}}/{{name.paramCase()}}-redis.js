
// const { EXAMPLE_KEY } = require("../../database/redis/key");
const redisInstance = require("../../database/redis/connection");

module.exports = class {{name.pascalCase()}}RedisRepo {
  #instance = redisInstance;
};
