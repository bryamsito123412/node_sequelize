const models = require('../models')

function crearAlumno(req, res) {
    models.Alumnos.create({
            rut: req.body.rut,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo
        })
        .then(alumno => res.status(201).send(alumno))
        .catch(error => res.status(400).send(error));
}

module.exports = {
    crearAlumno
}