const { Schema, model } = require("mongoose");

const pregunta = new Schema({
    texto: String,
    opciones: [String]
});

module.exports = model("Pregunta", pregunta);