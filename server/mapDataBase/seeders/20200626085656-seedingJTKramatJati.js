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
    name: 'Kramat Jati',
    city: 'Jakarta Timur',
    mapName: 'kramatJati',
    population: 275658,
    homicide: 0,
    assault: 12,
    harassment: 2,
    abduction: 1,
    robbery: 8,
    theft: 312,
    drugs: 110,
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
