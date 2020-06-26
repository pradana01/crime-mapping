'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Comment extends Model {

  }
  Comment.init({
    UserId: DataTypes.INTEGER,
    CrimeReportId: DataTypes.INTEGER,
    comment: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Comment should not be empty"
        }
      }
    }
  }, { sequelize });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {sourceKey: 'id', foreignKey: 'UserId'})
    Comment.belongsTo(models.CrimeReport, {sourceKey: 'id', foreignKey: 'CrimeReportId'})
  };
  return Comment;
};