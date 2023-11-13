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
    }

});


module.exports = model("Depresion Respuesta", respuestas_depresion);

