'use strict';
module.exports = (sequelize, DataTypes) => {
  var Curso_Alumno = sequelize.define('Curso_Alumno', {
    id_curso: DataTypes.STRING,
    id_alumno: DataTypes.STRING
  }, {});
  Curso_Alumno.associate = function(models) {

  };
  return Curso_Alumno;
};