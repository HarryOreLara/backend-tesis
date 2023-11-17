const { Schema, model } = require("mongoose");


const respuestas_joke = new Schema({
    idPersona: {
        type: String,
        required: true,
        trim: true,
    },
    nombrePersona: {
        type: String,
        required: true,
        trim: true,
    },
    apellidoPersona: {
        type: String,
        required: true,
        trim: true,
    },
    jokePuntuado: [
        {
            idJoke: {
                type: String,
                required: true
            },
            contenido: {
                type: String,
                required: true
            },
            respuesta: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
    }
})


module.exports = model("Joke Respuesta", respuestas_joke);

