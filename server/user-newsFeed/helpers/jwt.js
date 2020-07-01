const jwt = require("jsonwebtoken");
const secretKey = "inirahasia";

function generateToken(payload) {
  let access_token = jwt.sign(
    {
      id: payload.id,
      email: payload.email,
    },
    secretKey
  );
  return access_token;
}

function verifyToken(access_token) {
  return jwt.verify(access_token, secretKey);
}

module.exports = { generateToken, verifyToken };
