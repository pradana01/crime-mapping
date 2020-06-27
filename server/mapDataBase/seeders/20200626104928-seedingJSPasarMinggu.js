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
    name: 'Pasar Minggu',
    city: 'Jakarta Selatan',
    mapName: 'pasarMinggu',
    homicide: 4,
    assault: 6,
    harassment: 1,
    abduction: 2,
    robbery: 12,
    theft: 235,
    drugs: 4,
    fraudulency: 5,
    anarchism: 20,
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
