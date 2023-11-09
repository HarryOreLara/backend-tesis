const { Schema, model } = require("mongoose");


const persona = new Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: String,
        required: true,
        trim: true,
    },
    genero: {
        type: String,
        required: true,
        trim: true,
    },
    dni: {
        type: String,
        required: true,
        trim: true,
    },
    idUsuario: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
      },

});

module.exports = model("Persona", persona);