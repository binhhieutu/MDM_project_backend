const { ENV, PRODUCTION } = require("../../../core/utils/constant");
const otpService = require("../../../core/services/otp-service");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");
const OTPRepo = require("../../repository/otp-repository");

module.exports = async ({ otpRepo = OTPRepo.prototype }, phone, otp, isTestPhone) => {
  if (ENV === PRODUCTION && !isTestPhone) {
    const result = await otpService.sendOtp(phone, otp, otpRepo);
    if (!result) throw new customError.ClientError(errorCode.OTP_SYSTEM_ERROR);
  }

  return await otpRepo.saveOtp(phone, otp);
};
