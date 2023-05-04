require("dotenv").config();
const _ = require("lodash");

// module variables
const configLocal = require("./config.local");
const configDevelopment = require("./config.development");
const configProduction = require("./config.production");

const defaultConfig = configLocal;
const environment = global.process.env.NODE_ENV;

let environmentConfig;
if (environment === "local") {
  environmentConfig = configLocal;
} else if (environment === "development") {
  environmentConfig = configDevelopment;
} else if (environment === "production") {
  environmentConfig = configProduction;
}

const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;
