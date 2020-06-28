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
    name: 'Kebayoran Baru',
    city: 'Jakarta Selatan',
    mapName: 'kebayoranBaru',
    population: 143784,
    homicide: 0,
    assault: 10,
    harassment: 2,
    abduction: 1,
    robbery: 6,
    theft: 21,
    drugs: 0,
    fraudulency: 1,
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
