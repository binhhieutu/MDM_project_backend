
const redisInstance = require("../../database/redis/connection");
const { OTP_REDIS_KEY } = require("../../database/redis/key");

const OTP_EXPIRE = global.gConfig.otp.otp_expire;
const OTP_LENGTH = global.gConfig.otp.otp_length;

module.exports = class OTPRedisRepo {
  #instance = redisInstance;

  #otpKey = (phone) => `${OTP_REDIS_KEY}${phone}`;

  genOtp () {
    const str = Math.random().toString();

    return str.substr(str.length - OTP_LENGTH);
  }

  async saveOtp (phone, otp) {
    return await this.#instance.set(this.#otpKey(phone), otp, { EX: OTP_EXPIRE });
  }

  async getOtp (phone) {
    return await this.#instance.get(this.#otpKey(phone));
  }

  async delOtp (phone) {
    return await this.#instance.del(this.#otpKey(phone));
  }

  async verifyOtp (phone, otp) {
    const redisOTP = await this.getOtp(phone);

    if (redisOTP === otp) { return true; }

    return false;
  }
};
