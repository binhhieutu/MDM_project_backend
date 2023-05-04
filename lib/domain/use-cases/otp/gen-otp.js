const OTPRepo = require("../../repository/otp-repository");
const { ENV, PRODUCTION } = require("../../../core/utils/constant");

module.exports = async ({ otpRepo = OTPRepo.prototype }, isTestPhone) => {
  if (ENV === PRODUCTION && !isTestPhone) {
    return otpRepo.genOtp();
  }

  return global.gConfig.otp.otp_test;
};
