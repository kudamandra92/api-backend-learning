"use strict";
const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let testData = [];
    for (let i = 0; i < 10; i++) {
      testData.push({
        user_id: faker.number.int({ min: 1, max: 10 }),
        game_id: faker.number.int({ min: 1, max: 10 }),
        game_time: new Date(),
        purchased: faker.datatype.boolean(),
        favorite: faker.datatype.boolean(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Libraries", testData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Libraries", null, {});
  },
};
