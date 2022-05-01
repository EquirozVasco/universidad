const Carrera = require('../models/carreras.models');

const consultarCarreras = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Carreras consultadas exitosamente";
        const resultado = await Carrera.find({ activo: true });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando las carreras";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const crearCarrera = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera agregada correctamente";
        const { codigo, nombre, descripcion } = req.body;
        const carrera = new Carrera({ codigo, nombre, descripcion });
        resultado = await carrera.save();
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

const consultarCarrera = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera consultada exitosamente";
        const resultado = await Carrera.findOne({_id: req.params.id});
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultar la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const actualizarCarrera = async (req, res) => {
    let respuesta = {}
    const { nombre, descripcion } = req.body;
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera actualizada exitosamente";
        const resultado = await Carrera.findOneAndUpdate(req.params.id, { nombre, descripcion });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error actualizando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = { crearCarrera, consultarCarreras, actualizarCarrera, consultarCarrera}