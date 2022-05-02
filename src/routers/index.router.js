const express = require('express');

const router = express.Router();

const carreras_controller = require('../controllers/carreras.controller');
const estudiantes_controller = require('../controllers/estudiantes.controller');

const vrs = '/api/v1';

//carreras
router.get(vrs + '/carreras', carreras_controller.consultarCarreras);
router.get(vrs + '/carreras/:id', carreras_controller.consultarCarrera);
router.put(vrs + '/carreras/:id', carreras_controller.actualizarCarrera);
router.delete(vrs + '/carreras/:id', carreras_controller.eliminarCarrera);
router.post(vrs + '/carreras', carreras_controller.crearCarrera);

//estudiantes
router.post(vrs + '/estudiantes', estudiantes_controller.crearEstudiante);
router.get(vrs + '/estudiantes', estudiantes_controller.consultarEstudiantes);

module.exports = router;
