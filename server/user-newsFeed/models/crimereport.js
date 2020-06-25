'use strict';
module.exports = (sequelize, DataTypes) => {
  const CrimeReport = sequelize.define('CrimeReport', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    photo: DataTypes.STRING,
    video: DataTypes.STRING
  }, {});
  CrimeReport.associate = function(models) {
    // associations can be defined here
  };
  return CrimeReport;
};