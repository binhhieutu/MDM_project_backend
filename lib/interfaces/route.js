const handle = (func) => async (req, res) => {
  try {
    const result = await func(req, res);
    res.handleSuccess(result, res.code);
  } catch (error) {
    res.handleError(error);
  }
};

const handleError = (func) => async (req, res) => {
  try {
    await func(req, res);
  } catch (error) {
    res.handleError(error);
  }
};

module.exports = {
  handle,
  handleError,
};
