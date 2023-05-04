const jwt = require("jsonwebtoken");

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBANBV2Rnp5z0reB4OoSDj5/RDdPZkHsO1+0JI1DIsuph+Ohxay1N4
JQf7Tl1YlmOjSOLy04AH4rqoqXKgW8IRs2ECAwEAAQJABW33VoGOET4Mx1vCP0Ux
SmBnr/Q0CQ25GqUjQpt/0XGMraFOoKLi3OAHDMUYlCCz2TfmvKwCqiJ5QvuWrY5B
cQIhAPEw6Tvqd3foSyQdpHwC6KmMKND32EVjZr+qpfiILKGzAiEA3SCBHAJBgDHX
JVVDydtw4jLaza/xXN6UvTKROHznBJsCIQDLg0zZ/K6P49c7gzOeXEn7fkOWh/ra
GdTCF3jyK90VFwIgHV/uBsx96wuz6u+yu6P9EO90hZJz28Rtudx30is1fTUCIG+s
n4Xi+v8jWXLtK8UlN/WIuUqNTs4C6/lytxFq03Z4
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANBV2Rnp5z0reB4OoSDj5/RDdPZkHsO1
+0JI1DIsuph+Ohxay1N4JQf7Tl1YlmOjSOLy04AH4rqoqXKgW8IRs2ECAwEAAQ==
-----END PUBLIC KEY-----`;

const RSAOptions = {
  issuer: "mobile-e-learning",
  subject: "token",
  audience: "default",
  expiresIn: "30d",
  algorithm: "RS256",
  publicKey,
  signKey: privateKey,
  verifyKey: "SECRET_KEY",
};

const generateTokenApp = (payload) => {
  return jwt.sign(payload, RSAOptions.signKey, { algorithm: "RS256" });
};

const generateTokenAdmin = (payload) => {
  return jwt.sign(payload, RSAOptions.signKey, { algorithm: "RS256", expiresIn: "1d" });
};

function verifyToken (token) {
  return jwt.verify(token, RSAOptions.verifyKey, async function (err, decoded) {
    if (err) { return null; }

    return decoded;
  });
}

const decodedToken = (token) => jwt.decode(token);

module.exports = { generateTokenApp, generateTokenAdmin, verifyToken, decodedToken };
