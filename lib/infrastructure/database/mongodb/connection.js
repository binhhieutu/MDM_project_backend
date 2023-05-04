const { handleDatabaseError } = require("../../../core/utils/bot-log");
const { accessibleRecordsPlugin } = require("@casl/mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoose = require("mongoose");
mongoose.plugin(accessibleRecordsPlugin);
mongoose.plugin(uniqueValidator, { message: "Error, expected {PATH} to be unique." });
mongoose.set("strictQuery", true);

async function init () {
  try {
    const db = mongoose.connection;
    // error after initial connection was established
    db.on("error", (err) => handleDatabaseError(err));
    db.on("disconnected", () => handleDatabaseError("Mongodb disconnected"));

    db.once("open", () => console.log("\x1b[36m%s\x1b[0m", "Mongodb CONNECTED"));

    const options = { serverSelectionTimeoutMS: 15000 };
    await mongoose.connect(global.gConfig.database.mongodb, options);
  } catch (error) {
    // initial connection errors
    handleDatabaseError(error);
  }
}

module.exports = { init };
