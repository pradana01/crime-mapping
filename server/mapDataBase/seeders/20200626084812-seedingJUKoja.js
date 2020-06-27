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
     * 
    */
   await queryInterface.bulkInsert('Districts', [{
    name: 'Koja',
    city: 'Jakarta Utara',
    mapName: 'koja',
    population: 34073,
    homicide: 0,
    assault: 12,
    harassment: 0,
    abduction: 0,
    robbery: 13,
    theft: 76,
    drugs: 10,
    fraudulency: 6,
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
