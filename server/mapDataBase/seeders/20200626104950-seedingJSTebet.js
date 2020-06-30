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
    name: 'Tebet',
    city: 'Jakarta Selatan',
    mapName: 'tebet',
    population: 211287,
    homicide: 5,
    assault: 23,
    harassment: 7,
    abduction: 1,
    robbery: 10,
    theft: 117,
    drugs: 15,
    fraudulency: 0,
    anarchism: 2,
    status: 'warning',
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
