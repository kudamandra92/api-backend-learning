'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Libraries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      game_id: {
        type: Sequelize.INTEGER
      },
      game_time: {
        type: Sequelize.TIME
      },
      purchased: {
        type: Sequelize.BOOLEAN
      },
      favorite: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Libraries');
  }
};