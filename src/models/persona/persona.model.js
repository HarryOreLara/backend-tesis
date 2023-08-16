const { Schema, model } = require("mongoose");


const persona = new Schema({

    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apellidos: {
        type: String,
        require: true,
        trim: true
    },
    edad: {
        type: String,
        require: true,
        trim: true,
    },
    genero: {
        type: String,
        require: true,
        trim: true,
    },
    dni: {
        type: String,
        require: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },

});

module.exports = model("Persona", persona);