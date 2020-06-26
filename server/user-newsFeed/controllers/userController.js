const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static signIn(req, res, next) {
    const { username, password } = req.body;
    User.findOne({
      where: { username },
    })
      .then((result) => {
        if (result) {
          let compare = checkPassword(password, result.password);
          if (compare) {
            let access_token = generateToken(result);
            res.status(200).json({ access_token });
          } else {
            next({ name: "INVALID_PASSWORD" });
          }
        } else {
          next({ name: "INVALID_USERNAME" });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static signUp(req, res, next) {
    const { name, location, username, email, password } = req.body;

    User.findOne({
      where: { username },
    })
      .then((data) => {
        if (data) {
          next({ name: "USERNAME_ALREADY_EXIST" });
        } else {
          return User.create({
            name,
            location,
            username,
            email,
            password,
          });
        }
      })
      .then((data) => {
        res.status(201).json({
          id: data.id,
          name: data.name,
          location: data.location,
          username: data.username,
          email: data.email,
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
