const { Schema, model } = require("mongoose");

const preguntaSoledad = new Schema({
    
    contenido:{
        type:String,
        required:true,
        trim: true
    },
    puntuacion:{
        nunca:{
            type: Number,
            required:true,
            default: 0
        },
        aveces:{
            type: Number,
            required:true,
            default: 0
        },
        conFrecuencia:{
            type: Number,
            required:true,
            default: 0
        },
        siempre:{
            type: Number,
            required:true,
            default: 0
        },
    },
    items:[
    ],
    numeroDocumento: { type: Number },
    createdAt: {
        type: Date,
        default: Date.now(),
      },
});

module.exports = model("SoledadPregunta", preguntaSoledad);