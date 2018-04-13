const express = require("express")
const api = express.Router()
const cors = require('cors')
const alumnosCtrl = require('../controllers/alumnos')


api.post('/alumnos', cors(), alumnosCtrl.crearAlumno)

module.exports = api
