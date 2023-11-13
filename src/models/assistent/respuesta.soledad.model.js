const { Schema, model } = require("mongoose");


const respuestas_soledad = new Schema({

    idPersona: {
        type: String,
        required: true,
        trim: true,
    },
    preguntasPuntuadas: [
        {
            idPregunta:{
                type: String,
                required: true
            },
            contenido:{
                type:String,
                required: true
            },
            respuesta: {
                type:String,
                required: true,
                enum: ['nunca', 'aveces', 'conFrecuencia', 'siempre'],
            }
        }
    ],
    createdAt:{
        type: Date,
    }

});


module.exports = model("Soledad Respuesta", respuestas_soledad);

