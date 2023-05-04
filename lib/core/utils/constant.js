const AUTH = global.gConfig.auth;
const ENV = global.process.env.NODE_ENV;
const PRODUCTION = "production";
const DEVELOPMENT = "development";
const LOCAL = "local";

const DMY_HMS = "DD/MM/YYYY hh:mm:ss";
const DMY_HM = "DD/MM/YYYY hh:mm";
const YMD = "YYYY/MM/DD";
const MDY = "MM/DD/YYYY";
const HMS = "hh:mm:ss";
const DMY = "DD/MM/YYYY";
const YMD_HMS = "YYYY-MM-DD hh:mm:ss";
const HM = "hh:mm";
const MILLISECOND_OF_DAY = 86400000;

module.exports = {
  PRODUCTION,
  DEVELOPMENT,
  LOCAL,
  ENV,
  DMY_HMS,
  DMY_HM,
  YMD,
  MDY,
  HMS,
  AUTH,
  DMY,
  YMD_HMS,
  HM,
  MILLISECOND_OF_DAY,
};
