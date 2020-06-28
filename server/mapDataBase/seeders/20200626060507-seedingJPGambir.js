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
    name: 'Gambir',
    city: 'Jakarta Pusat',
    mapName: 'gambir',
    population: 78254,
    homicide: 1,
    assault: 5,
    harassment: 8,
    abduction: 0,
    robbery: 42,
    theft: 79,
    drugs: 10,
    fraudulency: 1,
    anarchism: 1,
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
