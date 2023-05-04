const OTPRepo = require("../../repository/otp-repository");

module.exports = async function verifyOtp ({ otpRepo = OTPRepo.prototype }, phone, otp) {
  return await otpRepo.verifyOtp(phone, otp);
};
