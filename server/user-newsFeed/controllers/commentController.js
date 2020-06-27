const { Comment } = require("../models");

class CommentController {
  static show(req, res, next) {
    Comment.findAll()
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((err) => {
        next(err);
      });
  }

  static findByReportId(req, res, next) {
    Comment.findAll({ where: { CrimeReportId: req.params.id } })
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((err) => {
        next(err);
      });
  }

  static add(req, res, next) {
    const { comment, CrimeReportId } = req.body;
    const UserId = req.userData.id;

    Comment.create({ comment, CrimeReportId, UserId })
      .then((comment) => {
        res.status(201).json(comment);
      })
      .catch((err) => {
        next(err);
      });
  }

  static delete(req, res, next) {
    Comment.destroy({ where: { id: req.params.id } })
      .then((result) => {
        res.status(200).json({ message: "Successfully deleted the report" });
      })
      .catch((err) => {
        next(err);
      });
  }

  static update(req, res, next) {
    const { comment } = req.body;
    Comment.update(
      { comment },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => {
        return Comment.findByPk(req.params.id);
      })
      .then((comment) => {
        res.status(200).json(comment);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = CommentController;
