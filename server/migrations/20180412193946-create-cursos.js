'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_curso: {
        type: Sequelize.STRING
      },
      lugar: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.STRING
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
  down: (queryInterface /*, Sequelize*/) => {
    return queryInterface.dropTable('Cursos');
  }
};