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
    name: 'Jagakarsa',
    city: 'Jakarta Selatan',
    mapName: 'jagakarsa',
    population: 350000,
    homicide: 0,
    assault: 2,
    harassment: 3,
    abduction: 5,
    robbery: 1,
    theft: 5,
    drugs: 7,
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
