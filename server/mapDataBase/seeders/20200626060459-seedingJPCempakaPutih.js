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
     name: 'Cempaka Putih',
     city: 'Jakarta Pusat',
     mapName: 'cempakaPutih',
     population: 85051,
     homicide: 10,
     assault: 18,
     harassment: 23,
     abduction: 3,
     robbery: 53,
     theft: 67,
     drugs: 7,
     fraudulency: 9,
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
