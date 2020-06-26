'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CrimeReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CrimeReport.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING,
    video: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CrimeReport',
  });
  return CrimeReport;
};