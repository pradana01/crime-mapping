'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      mapName: {
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.INTEGER
      },
      homicide: {
        type: Sequelize.INTEGER
      },
      assault: {
        type: Sequelize.INTEGER
      },
      harassment: {
        type: Sequelize.INTEGER
      },
      abduction: {
        type: Sequelize.INTEGER
      },
      robbery: {
        type: Sequelize.INTEGER
      },
      theft: {
        type: Sequelize.INTEGER
      },
      drugs: {
        type: Sequelize.INTEGER
      },
      fraudulency: {
        type: Sequelize.INTEGER
      },
      anarchism: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Districts');
  }
};