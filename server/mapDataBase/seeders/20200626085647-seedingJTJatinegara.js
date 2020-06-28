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
    name: 'Jatinegara',
    city: 'Jakarta Timur',
    mapName: 'jatinegara',
    population: 96977,
    homicide: 4,
    assault: 74,
    harassment: 1,
    abduction: 0,
    robbery: 19,
    theft: 235,
    drugs: 6,
    fraudulency: 0,
    anarchism: 35,
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
