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
    name: 'Cilincing',
    city: 'Jakarta Utara',
    mapName: 'cilincing',
    population: 57061,
    homicide: 15,
    assault: 56,
    harassment: 1,
    abduction: 0,
    robbery: 30,
    theft: 64,
    drugs: 78,
    fraudulency: 1,
    anarchism: 46,
    status: 'dangerous',
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
