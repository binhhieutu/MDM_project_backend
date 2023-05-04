const OTPRepo = require("../../repository/otp-repository");

module.exports = async ({ otpRepo = OTPRepo.prototype }, phone, isTestPhone) => {
  if (isTestPhone) return 0;

  const date = new Date().toLocaleDateString();

  return await otpRepo.getCount({ phone, date });
};
