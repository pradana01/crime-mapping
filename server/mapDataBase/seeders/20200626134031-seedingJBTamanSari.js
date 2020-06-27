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
    name: 'Taman Sari',
    city: 'Jakarta Barat',
    mapName: 'tamansari',
    population: 130810,
    homicide: 10,
    assault: 76,
    harassment: 0,
    abduction: 1,
    robbery: 84,
    theft: 324,
    drugs: 1,
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
