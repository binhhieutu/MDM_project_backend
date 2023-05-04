const { DMY_HMS, DMY_HM, YMD, MDY, HMS, DMY, YMD_HMS, HM } = require("./constant");

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;

  return false;
}

function isJsonString (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

function dateToString (input, format) {
  if (!input) { return ""; }

  const fullTime = new Date(input);
  const month = fullTime.getMonth() + 1;
  const date = fullTime.getDate();
  const year = fullTime.getFullYear();
  const hours = fullTime.getHours();
  const minutes = fullTime.getMinutes();
  const seconds = fullTime.getSeconds();

  const time = {
    year,
    date: date < 10 ? `0${date}` : date,
    month: month < 10 ? `0${month}` : month,
    hour: hours < 10 ? `0${hours}` : hours,
    minute: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };

  if (!format || format === DMY) { return `${time.date}/${time.month}/${time.year}`; }
  if (format === DMY_HMS) {
    return `${time.date}/${time.month}/${time.year} ${time.hour}:${time.minute}:${time.seconds}`;
  }
  if (format === DMY_HM) {
    return `${time.date}/${time.month}/${time.year} ${time.hour}:${time.minute}`;
  }
  if (format === YMD) {
    return `${time.year}/${time.month}/${time.date}`;
  }
  if (format === MDY) {
    return `${time.month}/${time.date}/${time.year}`;
  }
  if (format === HMS) {
    return `${time.hour}/${time.minute}/${time.seconds}`;
  };
  if (format === YMD_HMS) {
    return `${time.year}/${time.month}/${time.date} ${time.hour}:${time.minute}:${time.seconds}`;
  }
  if (format === MDY) {
    return `${time.month}/${time.date}/${time.year}`;
  }
  if (format === HM) {
    return `${time.hour}:${time.minute}`;
  }
}

async function getIpAddress (req) {
  const ip =
    req.headers["x-real-ip"] ||
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  return ip;
}

function isValidPhone (phone) {
  return phone && phone.length === 10 && !isNaN(phone) && phone.charAt(0) === "0";
}

function isValidDate (d) {
  const date = new Date(d);

  return date instanceof Date && !isNaN(date);
}

module.exports = {
  dateToString,
  isJsonString,
  getIpAddress,
  isValidPhone,
  isValidDate,
  normalizePort,
};
