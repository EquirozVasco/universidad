const { Schema, model } = require('mongoose');

const carreraSchema = new Schema(
    {
        codigo: {
            type: String,
            minlength: 2,
            maxlength: 10,
            required: true,
            unique: true
        },

        nombre:{
            type: String,
            required: true,
            minlength: 5,
            maxlength: 150
        },
        descripcion:{
            type: String,
            required: true,
            maxlength: 500
        },
        activo:{
            type: Boolean,
            default: true
        }
    }
);

module.exports = model('carrera', carreraSchema);