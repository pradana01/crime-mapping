"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CrimeReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // const User = sequelize.define('User')
      this.belongsToMany(models.User, { through: models.Comment, foreignKey: 'CrimeReportId' })
    }
  }
  CrimeReport.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "title cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "description cannot be empty",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "location cannot be empty",
          },
        },
      },
      photo: DataTypes.STRING,
      video: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CrimeReport",
    }
  );
  return CrimeReport;
};
