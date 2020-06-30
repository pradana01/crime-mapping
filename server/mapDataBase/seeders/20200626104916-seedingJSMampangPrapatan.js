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
    name: 'Mampang Prapatan',
    city: 'Jakarta Selatan',
    mapName: 'mampangPrapatan',
    population: 146741,
    homicide: 0,
    assault: 1,
    harassment: 3,
    abduction: 1,
    robbery: 8,
    theft: 64,
    drugs: 1,
    fraudulency: 1,
    anarchism: 2,
    status: 'safe',
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
