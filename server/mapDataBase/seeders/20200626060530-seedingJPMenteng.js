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
    name: 'Menteng',
    city: 'Jakarta Pusat',
    mapName: 'menteng',
    population: 68168,
    homicide: 0,
    assault: 5,
    harassment: 2,
    abduction: 0,
    robbery: 10,
    theft: 13,
    drugs: 15,
    fraudulency: 1,
    anarchism: 1,
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
