const { SUCCESS, SYSTEM_ERROR } = require("../../core/error/error-code");

module.exports = (req, res, next) => {
  res.handleSuccess = (data = {}, errorCode = SUCCESS, status = 200) => {
    return res.json(assignResp(res, data, errorCode.message, errorCode.code, status));
  };

  res.error = (errorCode = SYSTEM_ERROR, status = 500) => {
    return res.json(assignResp(res, {}, errorCode.message, errorCode.code, status));
  };

  res.handleError = (error) => {
    console.error(error);
    if (!error || !error.code) error = SYSTEM_ERROR;

    return res.error(error, error.status);
  };

  function assignResp (res, data, message, code, status) {
    res.data = { status, code, message, data };

    return res.data;
  }

  next();
};
