const jwt = require("jsonwebtoken");
const { verifyToken } = require("../helpers/jwt");

function authentication(req, res, next) {
  let { access_token } = req.headers;

  if (!access_token) {
    next({ name: "LOGIN_FIRST" });
  }
  try {
    const decoded = verifyToken(access_token);
    req.userData = decoded;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {authentication};
