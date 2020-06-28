const { District } = require("../models");

class Control {
  static getAllDistricts(req, res, next) {
    District.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  }
  static getOneDistrict(req, res, next) {
    District.findByPk(Number(req.params.id))
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  }
}

module.exports = Control;
