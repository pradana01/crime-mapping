module.exports = function (err, req, res, next) {
  let statusCode = 500;

  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    message = "Validation Error";
  } else if (err.name == "INVALID_USERNAME") {
    statusCode = 400;
    message = `Wrong Username`;
  } else if (err.name == "INVALID_PASSWORD") {
    statusCode = 400;
    message = `Wrong Password`;
  } else if (err.name == "LOGIN_FIRST") {
    statusCode = 400;
    message = `You Should Login First`;
  } else if (err.name == "USERNAME_ALREADY_EXIST") {
    statusCode = 400;
    message = `Username Already Exist`;
  }

  res.status(statusCode).json({ message });
};
