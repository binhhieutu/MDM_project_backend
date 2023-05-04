const express = require("express");
const logger = require("morgan");
const favicon = require("serve-favicon");
const createError = require("http-errors");
const path = require("path");
const corsOption = require("../middleware/cors-option");
const response = require("../middleware/response");
const consoleLog = require("../middleware/console-log");
const authorization = require("../middleware/authorization");

const redirectRouter = require("./redirect-router");
const appRouter = require("./app-router");
const adminRouter = require("./admin-router");
const publicRouter = require("./public-router");

const { PRODUCTION, ENV } = require("../../core/utils/constant");

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "pug");
app.use("/public", express.static(path.join(path.resolve(), "public")));
app.use(favicon(path.join(path.resolve(), "public", "asset/icon/favicon.ico")));
app.use(corsOption.expose());
app.use(express.json());
app.use("/", require("../../interfaces/routes/index-route"));
app.use(response);

if (ENV === PRODUCTION) app.use(consoleLog.writeLog);
app.use(authorization);

app.use(redirectRouter);
app.use(appRouter);
app.use(adminRouter);
app.use(publicRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError.NotFound());
});

// error handler
app.use(function (err, req, res) {
  console.error(err.message);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

global.process.env.UV_THREADPOOL_SIZE = 128;

module.exports = app;
