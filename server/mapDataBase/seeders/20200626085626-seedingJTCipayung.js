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
    name: 'Cipayung',
    city: 'Jakarta Timur',
    mapName: 'cipayung',
    population: 29311,
    homicide: 2,
    assault: 3,
    harassment: 1,
    abduction: 0,
    robbery: 21,
    theft: 51,
    drugs: 26,
    fraudulency: 0,
    anarchism: 0,
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
