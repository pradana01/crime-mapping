"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  District.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    mapName: DataTypes.STRING,
    population: DataTypes.INTEGER,
    homicide: DataTypes.INTEGER,
    assault: DataTypes.INTEGER,
    harassment: DataTypes.INTEGER,
    abduction: DataTypes.INTEGER,
    robbery: DataTypes.INTEGER,
    theft: DataTypes.INTEGER,
    drugs: DataTypes.INTEGER,
    status: DataTypes.STRING,
    fraudulency: DataTypes.INTEGER,
    anarchism: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};
