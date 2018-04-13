'use strict';
module.exports = (sequelize, DataTypes) => {
  var Alumnos = sequelize.define('Alumnos', {
    rut: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {});
  Alumnos.associate = (models) => {

  };
  return Alumnos;
};