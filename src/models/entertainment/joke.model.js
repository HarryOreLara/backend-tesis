const { Schema, model } = require("mongoose");

const joke = new Schema({
    contenido: { type: String, required: true, trim: true },
    categoria: { type: String, required: true, trim: true },
    autor: { type: String, trim: true },
    nivelDificultad: { type: String, trim: true },
    idioma: { type: String, trim: true },
    popularidad: { type: Number, default: 0 },
    votos: {
        likes: { type: Number, default: 0 },
        dislikes: { type: Number, default: 0 }
    },
    fuente: { type: String, trim: true },
    imagenUrl: { type: String, trim: true },
    numeroDocumento: { type: Number },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
    
});

module.exports = model("Joke", joke);