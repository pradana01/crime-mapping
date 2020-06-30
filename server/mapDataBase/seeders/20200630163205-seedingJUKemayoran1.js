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
    name: 'Kemayoran',
    city: 'Jakarta Pusat',
    mapName: 'kemayoran1',
    population: 222309,
    homicide: 3,
    assault: 10,
    harassment: 20,
    abduction: 0,
    robbery: 10,
    theft: 40,
    drugs: 15,
    fraudulency: 0,
    anarchism: 0,
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
