const util = require("../../../core/utils/util");
const customError = require("../../../core/error/custom-error");
const errorCode = require("../../../core/error/error-code");

const genOtpUseCase = require("../../../domain/use-cases/otp/gen-otp");
const getUserSentOtpCountUseCase = require("../../../domain/use-cases/otp/get-user-sent-count");
const sendOtpUseCase = require("../../../domain/use-cases/otp/send-otp");
const verifyOtp = require("../../../domain/use-cases/otp/verify-otp");
const getUser = require("../../../domain/use-cases/user/get-user-mongodb");
const getUserById = require("../../../domain/use-cases/user/get-user-by-id");
const generateToken = require("../../../domain/use-cases/user/generate-token");
const loginWithGoogle = require("../../../domain/use-cases/user/login-with-google");
const loginWithFacebook = require("../../../domain/use-cases/user/login-with-facebook");
const loginWithZalo = require("../../../domain/use-cases/user/login-with-zalo");
const loginWithApple = require("../../../domain/use-cases/user/login-with-apple");

const AppUserSerializer = require("../../serializers/user/app-serializer");
const { LOGIN_METHOD } = require("../../../core/app-helpers/constant/user-constant");

async function sendOTP ({ body }, repository) {
  const isValid = util.isValidPhone(body.phone);
  if (!isValid) {
    throw new customError.ClientError(errorCode.INVALID_PHONE);
  }
  const isTestPhone = true;
  const otp = await genOtpUseCase(repository, isTestPhone);
  const sentCount = await getUserSentOtpCountUseCase(repository, body.phone, isTestPhone);
  if (sentCount >= global.gConfig.otp.otp_max_in_day) {
    throw new customError.ClientError(errorCode.MAX_OTP_IN_DAY);
  }

  await sendOtpUseCase(repository, body.phone, otp, isTestPhone);
}

async function validateOTP ({ body }, repository) {
  const isValid = util.isValidPhone(body.phone);
  if (!isValid) {
    throw new customError.ClientError(errorCode.INVALID_PHONE);
  }

  const isValidOTP = await verifyOtp(repository, body.phone, body.otp);
  if (!isValidOTP) {
    throw new customError.ClientError(errorCode.INCORRECT_OTP);
  }

  const user = await getUser(repository, body.phone);

  return AppUserSerializer.toProfileJson(user);
}

async function login ({ body, device }, repository) {
  let user = null;
  if (body.login_method === LOGIN_METHOD.google) {
    user = await loginWithGoogle(repository, device, body.google_id);
  } else if (body.login_method === LOGIN_METHOD.facebook) {
    user = await loginWithFacebook(repository, device, body.facebook_id);
  } else if (body.login_method === LOGIN_METHOD.zalo) {
    user = await loginWithZalo(repository, device, body.zalo_id);
  } else if (body.login_method === LOGIN_METHOD.apple) {
    user = await loginWithApple(repository, device, body.apple_id);
  }

  if (!user) {
    throw new customError.ClientError(errorCode.LOGIN_ERROR);
  }

  const accessToken = await generateToken({ device, user_id: user.id });

  return AppUserSerializer.loginResData(accessToken, user);
}

async function getProfile (req, repository) {
  const user = await getUserById(repository, req.user.id);

  return AppUserSerializer.toProfileJson(user);
}

module.exports = {
  sendOTP,
  validateOTP,
  login,
  getProfile,
};
