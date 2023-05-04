const botLog = require("../utils/bot-log");
const hash = require("../utils/crypto");
const axios = require("axios");
const instance = axios.create({ timeout: global.gConfig.otp.timeout_in_millisecond });

const TEMPLATE = global.gConfig.otp.template;
const PRODUCT = global.gConfig.otp.product;
const PUBLIC_KEY = global.gConfig.otp.public_key;
const PRIVATE_KEY = global.gConfig.otp.private_key;
const ACCOUNT = global.gConfig.otp.account;
const PLATFORM = global.gConfig.otp.platform;

const CONFIG = {
  headers: {
    "content-type": "application/json",
    "x-product": PRODUCT,
    "x-token": PUBLIC_KEY,
    "x-signature": "",
  },
};

const URL_SEND_OTP = `${global.gConfig.otp.url}`;

async function sendOtp (phone, otp, otpRepo) {
  const body = {
    content: TEMPLATE.replace("[OTP]", otp),
    platform: PLATFORM,
    account: ACCOUNT,
    recipients: phone,
  };

  const otpLogsData = { phone, body, result: null };
  const signature = hash.sha256(PRIVATE_KEY + JSON.stringify(body));

  CONFIG.headers["x-signature"] = signature;

  return instance
    .post(URL_SEND_OTP, body, CONFIG)
    .then((response) => {
      otpLogsData.result = response.data;

      return response.data;
    })
    .catch((err) => {
      const error = { error: err.message };

      otpLogsData.result = error;
      botLog.handleApiServiceError(URL_SEND_OTP, error, body);
    })
    .finally(() => {
      otpRepo.create(otpLogsData);
    });
}

module.exports = {
  sendOtp,
};
