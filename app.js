'use strict'
//Se definen modulos
const express = require('express');
const api = require('./server/routes');
const bodyParser = require('body-parser');
const cors = require('cors')
//Se instansean modulos
const app = express();
//Se instansean los middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/api', api)

module.exports = app