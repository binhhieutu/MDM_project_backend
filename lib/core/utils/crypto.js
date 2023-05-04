const crypto = require("crypto-js");

function sha256 (data) {
  return crypto.SHA256(data).toString();
}

function hmacSha256 (hashData, hashKey) {
  return crypto.HmacSHA256(hashData, hashKey).toString();
}

module.exports = {
  sha256,
  hmacSha256,
};
