const cors = require("cors");

// cors
const whiteListUrl = global.gConfig.white_list_url;
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whiteListUrl.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

function expose () {
  if (whiteListUrl) return cors(corsOptions);
  else return cors();
}

module.exports = {
  expose,
};
