const OTPRepo = require("../../../domain/repository/otp-repository");
const OTPMongodbRepo = require("./otp-mongodb");
const OTPRedisRepo = require("./otp-redis");

module.exports = class extends OTPRepo {
  constructor () {
    super();
    this.mongodbRepo = new OTPMongodbRepo();
    this.redisRepo = new OTPRedisRepo();
  }
  // Mongodb

  async getCount (condition) {
    return await this.mongodbRepo.getCount(condition);
  }

  async selectMany (values) {
    return await this.mongodbRepo.selectMany(values);
  }

  async selectManyAggregate (values) {
    return await this.mongodbRepo.selectManyAggregate(values);
  }

  async selectOne (values) {
    return await this.mongodbRepo.selectOne(values);
  }

  async create (data) {
    return await this.mongodbRepo.create(data);
  }

  async updateOne (condition, updateData) {
    return await this.mongodbRepo.updateOne(condition, updateData);
  }

  async updateMany (condition, updateData) {
    return await this.mongodbRepo.updateMany(condition, updateData);
  }

  async removeOne (condition) {
    return await this.mongodbRepo.removeOne(condition);
  }

  async removeMany (condition) {
    return await this.mongodbRepo.removeMany(condition);
  }

  genOtp () {
    return this.redisRepo.genOtp();
  }

  async saveOtp (phone, otp) {
    return await this.redisRepo.saveOtp(phone, otp);
  }

  async getOtp (phone) {
    return await this.redisRepo.getOtp(phone);
  }

  async delOtp (phone) {
    return await this.redisRepo.delOtp(phone);
  }

  async verifyOtp (phone, otp) {
    const redisOTP = await this.getOtp(phone);
    if (redisOTP === otp) {
      return true;
    }

    return false;
  }
};
