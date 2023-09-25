const { Schema, model } = require("mongoose");


const respuestas_depresion = new Schema({

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
                type:Boolean,
                required: true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now()
    }

});


module.exports = model("Depresion Respuesta", respuestas_depresion);

