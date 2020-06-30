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
    name: 'Senen',
    city: 'Jakarta Pusat',
    mapName: 'senen',
    population: 95945,
    homicide: 12,
    assault: 23,
    harassment: 10,
    abduction: 0,
    robbery: 46,
    theft: 80,
    drugs: 16,
    fraudulency: 12,
    anarchism: 8,
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
