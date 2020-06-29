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
   await queryInterface.bulkInsert('CrimeReports', [{
     title: 'Seed Kebakaran',
     description: 'Seed deskripsi laporan',
     location: 'Seed lokasi laporan',
     photo: 'https://img.alinea.id/img/content/2019/12/26/59915/kebakaran-saat-natal-200-rumah-hangus-di-chile-kFaj0VE1Mx.jpg',
     video: 'https://res.cloudinary.com/andrean/video/upload/v1593420991/kfirczlifwabdff18nww.mp4',
     UserId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CrimeReports', null, {})
  }
};
