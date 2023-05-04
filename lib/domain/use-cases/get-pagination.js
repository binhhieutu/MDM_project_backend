module.exports = (inputPage = 1, limit = 10) => {
  const page = !parseInt(inputPage) || parseInt(inputPage) < 1 ? 1 : parseInt(inputPage);

  return { limit: parseInt(limit), skip: (page - 1) * limit, page };
};
