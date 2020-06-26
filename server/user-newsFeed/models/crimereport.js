'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class CrimeReport extends Model {

  }
  CrimeReport.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'title cannot be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'description cannot be empty'
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'location cannot be empty'
        }
      }
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'photo cannot be empty'
        }
      }
    },
    video: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'video cannot be empty'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, { sequelize });
  CrimeReport.associate = function(models) {
    // associations can be defined here
    CrimeReport.belongsTo(models.User)
    CrimeReport.belongsToMany(models.User, {through: models.Comment})
  };
  return CrimeReport;
};