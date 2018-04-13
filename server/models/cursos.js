'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cursos = sequelize.define('Cursos', {
    nombre_curso: DataTypes.STRING,
    lugar: DataTypes.STRING,
    fecha_inicio: DataTypes.STRING,
    fecha_inicio: DataTypes.STRING
  }, {});
  Cursos.associate = function(models) {
    // associations can be defined here
  };
  return Cursos;
};