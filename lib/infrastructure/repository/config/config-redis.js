
const { APP_CONFIG_REDIS_KEY } = require("../../database/redis/key");
const redisInstance = require("../../database/redis/connection");

module.exports = class ConfigRedisRepo {
  #instance = redisInstance;

  async setConfig (config) {
    return this.#instance.set(APP_CONFIG_REDIS_KEY, config);
  }

  async getConfig () {
    const redisConfig = await this.#instance.get(APP_CONFIG_REDIS_KEY);
    if (redisConfig) {
      return JSON.parse(redisConfig);
    }
  }
};
