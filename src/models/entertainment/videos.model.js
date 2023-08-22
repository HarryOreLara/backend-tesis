const { Schema, model } = require("mongoose");

const videos = new Schema({
    titulo: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true },
    url: { type: String, required: true, trim: true },
    categoria: { type: String, required: true, trim: true },
    fechaSubida: { type: Date },
    vistas: { type: Number, default: 0 },
    duracion: { type: String, trim: true },
    autor: { type: String, trim: true },
    etiquetas: [{ type: String, trim: true }],
    votos: {
        likes: { type: Number, default: 0 },
        dislikes: { type: Number, default: 0 }
    },
    comentarios: [
        {
            usuario: { type: String, trim: true },
            contenido: { type: String, trim: true }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = model("Videos", videos);