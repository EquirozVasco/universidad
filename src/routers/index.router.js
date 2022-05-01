const express = require('express');

const router = express.Router();

const carreras_controller = require('../controllers/carreras.controller');
const estudiantes_controller = require('../controllers/estudiantes.controller');

const vrs = '/api/v1';

router.get(vrs + '/carreras', carreras_controller.consultarCarreras);
router.get(vrs + '/carreras/:id', carreras_controller.consultarCarrera);
router.put(vrs + '/carreras/:id', carreras_controller.actualizarCarrera);
router.post(vrs + '/carreras', carreras_controller.crearCarrera);

module.exports = router;