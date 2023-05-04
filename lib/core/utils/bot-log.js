const { Webhook } = require("discord-webhook-node");
const { PRODUCTION, ENV } = require("./constant");
const axios = require("axios");
const logger = require("./logger");

function sendToDiscordBot ({ name, error, params, url }) {
  if (ENV === PRODUCTION) {
    const DISCORD_URL = global.gConfig.logs.discord_url;
    const hook = new Webhook(DISCORD_URL);

    const message =
      `**${name}**` +
      "```" +
      url +
      "```" +
      "**PARAMS** ```" +
      params +
      "```" +
      "**ERROR** ```" +
      error +
      "```";

    hook.send(message);
  }
}

function sendToTelegramBot ({ url, error, params }) {
  const TELEGRAM_URL = global.gConfig.logs.telegram_url;
  const TELEGRAM_CHAT_ID = global.gConfig.logs.telegram_chat_id;

  const telegramMessage = `[ENV]: ${ENV}
[URL]: ${url}
[ERROR]: ${error} 
[PARAMS]: ${params}`;

  const telegramParams = { chat_id: TELEGRAM_CHAT_ID, text: telegramMessage };

  axios
    .get(TELEGRAM_URL, { params: telegramParams })
    .then((res) => res.data)
    .catch((error) => console.error(error));
}

function handleApiServiceError (url, error, params) {
  let err = error;

  if (error.response && error.response.data) {
    err = error.response.data;
  } else if (error.request && error.message) {
    err = error.message;
  }
  const stringError = JSON.stringify(err);
  const stringParams = params ? JSON.stringify(params) : "";

  const name = "SERVICE ERROR";

  logger.error(`${name}: [${stringError}], INFO:[${stringParams}]`);
  sendToDiscordBot({ name, error: stringError, params: stringParams, url });
  sendToTelegramBot({ name, error: stringError, params: stringParams, url });
}

function handleDatabaseError (error) {
  const name = "Mongodb ERROR";

  logger.error(`${name}: [${error}]`);
  sendToDiscordBot({ name, error });
}

function handleRedisError (error) {
  const name = "Redis ERROR";

  logger.error(`${name}: [${error}]`);
  sendToDiscordBot({ name, error });
}

function handleFirebaseError (error) {
  const name = "Firebase ERROR";

  logger.error(`${name}: [${error}]`);
  sendToDiscordBot({ name, error });
}

function handleOneSignalError (error, params) {
  const name = "OneSignal ERROR";

  logger.error(`${name}: [${error}]`);
  sendToDiscordBot({ name, error, params });
}

module.exports = {
  handleDatabaseError,
  handleRedisError,
  handleApiServiceError,
  handleFirebaseError,
  handleOneSignalError,
};
