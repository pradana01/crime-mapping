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
    name: 'Sawah Besar',
    city: 'Jakarta Pusat',
    mapName: 'sawahBesar',
    population: 100593,
    homicide: 0,
    assault: 3,
    harassment: 2,
    abduction: 1,
    robbery: 23,
    theft: 70,
    drugs: 4,
    fraudulency: 0,
    anarchism: 0,
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
