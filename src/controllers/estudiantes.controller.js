const Estudiantes = require('../models/estudiantes.models');
const Carrera = require('../models/carreras.models');


const crearEstudiante = async (req, res) => {
    let respuesta = {};
    try {
        let { nro_id, nombre_1, nombre_2, apellido_1, apellido_2, fecha_de_nacimiento, carrera } = req.body;
        let resultado = await Carrera.findOne({ nombre: carrera });
        if (resultado != null) {
            if (resultado.activo == true) {
                respuesta.ok = true;
                respuesta.message = "Estudiante creado exitosamente";
                const estudiante = new Estudiantes({ nro_id, nombre_1, nombre_2, apellido_1, apellido_2, fecha_de_nacimiento, carrera });
                resultado = await estudiante.save();
                console.log(resultado);
                respuesta.info = resultado;
                res.send(respuesta);
            } else {
                console.log('Carrera inactiva.');
                respuesta.info = 'Carrera inactiva';
                res.send(respuesta);
            }
        } else {
            console.log('Carrera inexistente');
            respuesta.info = 'Carrera inexistente';
            res.send(respuesta);
        }
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error creando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const consultarEstudiantes = async(req, res) => {
  let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiantes consultados exitosamente";
        let resultado = await Estudiantes.find({ activo: true });
        console.log(`CONSULTAR ESTUDIANTES: ${resultado}`);
        const info = resultado.map((estudiante) => {
            console.log(`ESTUDIANTE: ${estudiante}`);
            const info = { ...estudiante._doc }
            info.__v = undefined
            info.edad = getAge(estudiante.fecha_de_nacimiento)
            return info
        })
        console.log(resultado);
        respuesta.info = info;
        res.send(respuesta);
    } catch (error) {
        console.log(error);
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los estudiantes";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const getAge = (fechaFinal) => {
    let fechaHoy = new Date();
    let fechaNto = new Date(fechaFinal);
    let edad = fechaHoy.getFullYear() - fechaNto.getFullYear();
    let difMeses = fechaHoy.getMonth() - fechaNto.getMonth();
    if (difMeses < 0 || (difMeses === 0 && fechaHoy.getDate() < fechaNto.getDate())) {
        edad--;
    }
    return edad;
}

const consultarEstudiante = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiantes consultados exitosamente";
        let resultado = await Estudiantes.findOne({ _id: req.params.id });
        const info = { ...resultado._doc }
        info.__v = undefined
        info.edad = getAge(resultado.fecha_de_nacimiento)
        respuesta.info = info;
        res.send(respuesta);
    } catch (error) {
        console.log(error);
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los estudiantes";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

const eliminarEstudiante = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiante eliminado exitosamente";
        const resultado = await Estudiantes.findByIdAndUpdate(req.params.id, { activo: false });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error eliminando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = { crearEstudiante, consultarEstudiantes, eliminarEstudiante, consultarEstudiante }

