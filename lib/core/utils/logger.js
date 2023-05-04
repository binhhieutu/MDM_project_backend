const Winston = require("winston");

require("winston-daily-rotate-file");

const options = {
  info: {
    level: "info",
    filename: "./logs/info.log",
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  error: {
    level: "error",
    filename: "./logs/error.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  rotateFile: {
    filename: "./logs/files/file.%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "5m",
    maxFiles: "14d",
  },
};

// eslint-disable-next-line new-cap
const logger = new Winston.createLogger({
  format: Winston.format.combine(
    Winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    Winston.format.json()
  ),
  transports: [
    new Winston.transports.DailyRotateFile(options.rotateFile),
    new Winston.transports.File(options.error),
    new Winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
