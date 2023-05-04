module.exports = {
  SUCCESS: { code: 1, sys_message: "SUCCESS", message: "Thành công" },
  SESSION_TIMEOUT: {
    code: -15,
    sys_message: "SESSION_TIMEOUT",
    message: "Đăng nhập hết hạn",
  },
  SYSTEM_ERROR: {
    code: -900,
    sys_message: "SYSTEM_ERROR",
    message: "Có lỗi xảy ra, vui lòng thử lại sau!",
  },
  OTP_SYSTEM_ERROR: {
    code: -901,
    sys_message: "OTP_SYSTEM_ERROR",
    message: "Không thể gửi tin nhắn, vui lòng thử lại sau!",
  },
  MISSING_DEVICE_ERROR: {
    code: -301,
    sys_message: "MISSING_DEVICE_ERROR",
    message: "Không tìm thấy thông tin thiết bị",
  },
  INVALID_PRODUCT_ERROR: {
    code: -302,
    sys_message: "INVALID_PRODUCT_ERROR",
    message: "Mã sản phẩm không hợp lệ",
  },
  INVALID_TOKEN_ERROR: {
    code: -303,
    sys_message: "INVALID_TOKEN_ERROR",
    message: "Dữ liệu xác thực không hợp lệ",
  },
  NOT_FOUND_ERROR: {
    code: -400,
    sys_message: "NOT_FOUND_ERROR",
    message: "Không tìm thấy dữ liệu",
  },
  DATA_EXIST_ERROR: {
    code: -401,
    sys_message: "DATA_EXIST_ERROR",
    message: "Dữ liệu đã tồn tại",
  },
  MISSING_PARAMS_ERROR: {
    code: -402,
    sys_message: "MISSING_PARAMS_ERROR",
    message: "Dữ liệu không hợp lệ",
  },
  PERMISSION_DENY_ERROR: {
    code: -403,
    sys_message: "PERMISSION_DENY_ERROR",
    message: "Từ chối truy cập",
  },
  // application error
  INVALID_PHONE: {
    code: -101,
    sys_message: "INVALID_PHONE",
    message: "Số điện thoại không hợp lệ",
  },
  INVALID_OTP: {
    code: -102,
    sys_message: "INVALID_OTP",
    message: "Mã xác nhận một lần không hợp lệ",
  },
  INCORRECT_OTP: {
    code: -103,
    sys_message: "INCORRECT_OTP",
    message: "Mã xác nhận không chính xác hoặc đã hết hạn",
  },
  MAX_OTP_IN_DAY: {
    code: -104,
    sys_message: "MAX_OTP_IN_DAY",
    message: "Bạn đã vượt quá số lần nhận tin nhắn trong ngày",
  },
  LOGIN_ERROR: {
    code: -105,
    sys_message: "LOGIN_ERROR",
    message: "Đăng nhập không thành công, không tìm thấy thông tin người dùng!",
  },
  INACTIVE_ACCOUNT_ERROR: {
    code: -106,
    sys_message: "INACTIVE_ACCOUNT_ERROR",
    message: "Tài khoản đã bị khóa!",
  },
  CREATE_ERROR: {
    code: -107,
    sys_message: "CREATE_ERROR",
    message: "Tạo mới không thành công! Vui lòng thử lại",
  },
  UPDATE_ERROR: {
    code: -108,
    sys_message: "UPDATE_ERROR",
    message: "Cập nhật không thành công! Vui lòng thử lại",
  },
  DELETE_ERROR: {
    code: -109,
    sys_message: "DELETE_ERROR",
    message: "Xóa không thành công! Vui lòng thử lại",
  },
  REGISTER_ERROR: {
    code: -110,
    sys_message: "REGISTER_ERROR",
    message: "Đăng kí không thành công",
  },
  LOGIN_FAIL: {
    code: -111,
    sys_message: "LOGIN_FAIL",
    message: "Đăng nhập không thành công",
  },
  INACTIVE_ACCOUNT: {
    code: -112,
    sys_message: "INACTIVE_ACCOUNT",
    message: "Tài khoản bị khoá vui lòng liên hệ admin",
  },
};
