const { Schema, model } = require("mongoose");

const preguntasDepresion = new Schema({
    
    contenido:{
        type:String,
        required:true,
        trim: true
    },
    puntuacion:{
        si:{
            type: Number,
            required:true,
            default: 0
        },
        no:{
            type: Number,
            required:true,
            default: 0
        }
    },
    items:[
    ],
    numeroDocumento: { type: Number },
    createdAt: {
        type: Date,
        default: Date.now(),
      },
});

module.exports = model("DepresionPregunta", preguntasDepresion);