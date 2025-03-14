'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [{
      id: Sequelize.literal('UUID()'),
      name: 'admin',
      description: 'seller'
    },
    {
      id: Sequelize.literal('UUID()'),
      name: 'user',
      description: 'buyer'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('roles', null, {});

  }
};
