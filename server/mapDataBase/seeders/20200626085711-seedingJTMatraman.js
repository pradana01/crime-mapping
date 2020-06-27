'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Districts', [{
    name: 'Matraman',
    city: 'Jakarta Timur',
    mapName: 'matraman',
    population: 193700,
    homicide: 21,
    assault: 83,
    harassment: 2,
    abduction: 0,
    robbery: 20,
    theft: 210,
    drugs: 10,
    fraudulency: 0,
    anarchism: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Districts', null, {});
  }
};
