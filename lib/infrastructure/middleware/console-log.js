const logger = require("../../core/utils/logger");

function writeLog (req, res, next) {
  const startHrTime = global.process.hrtime();

  res.on("finish", function () {
    const elapsedHrTime = global.process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

    writeLogFile(req, res, elapsedTimeInMs);
  });

  next();
}

function writeLogFile (req, res, elapsedTimeInMs) {
  const token = req.header("token");
  const product = req.header("product");

  const respData = req.method !== "GET" ? req.body : req.query;
  let params = ": params = " + JSON.stringify(respData);
  if (params.length > 400) {
    params = params.substring(0, 400);
  }
  const data = JSON.stringify(res.data);
  res.data = null;

  let log = `Method=[${req.method}], ProcessTime=[${elapsedTimeInMs}] ms,
  Request = [${req.originalUrl} ${params}] => Response=[${data}]`;

  if (token) log = log.concat(`, Token=[${token}]`);
  if (product) log = log.concat(`, Product=[${product}]`);

  logger.info(log);
}

module.exports = {
  writeLog,
};
