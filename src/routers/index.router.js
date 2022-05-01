const express = require('express');

const router = express.Router();

const carreras_controller = require('../controllers/carreras.controller');
const estudiantes_controller = require('../controllers/estudiantes.controller');

const vrs = '/api/v1';

router.post(vrs + '/carreras', carreras_controller.crearCarrera);

module.exports = router;