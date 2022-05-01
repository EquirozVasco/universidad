// const { agregarCarrera } = require('../services/mongodb.service');
const Carrera = require('../models/carreras.models');

const crearCarrera = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera agregada correctamente";
        const { codigo, nombre, descripcion } = req.body;
        const carrera = new Carrera({codigo, nombre, descripcion});
        respuesta = await carrera.save();
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);

    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error agregando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = { crearCarrera }