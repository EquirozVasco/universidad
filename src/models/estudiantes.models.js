const { Schema, model } = require('mongoose');

const estudianteSchema = new Schema(
    {
        nro_id: {
            type: String,
            minlength: 8,
            maxlength: 15,
            required: true,
            unique: true
        },
        nombre_1: {
            type: String,
            minlength: 5,
            maxlength: 100,
            required: true
        },
        nombre_2: {
            type: String,
            minlength: 5,
            maxlength: 100
        },
        apellido_1: {
            type: String,
            minlength: 5,
            maxlength: 100,
            required: true
        },
        apellido_2: {
            type: String,
            minlength: 5,
            maxlength: 100
        },
        fecha_de_nacimiento:{
            type: Date,
            required: true
        },
        activo:{
            type: Boolean,
            default: true
        },
        carrera:{
            type: String,
            required: true
        }
    }
);

module.exports = model('estudiante', estudianteSchema);