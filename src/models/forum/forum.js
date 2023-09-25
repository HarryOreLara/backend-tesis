const { Schema, model } = require("mongoose");


const forum = new Schema({

    titulo: {
        type: String,
        require: true,
        trim: true,
    },
    descripcion: {
        type: String,
        require: true,
        require: true,
    },
    respuestas: {
        type: Number,
        require: true,
        require: true,
    },
    creator: {
        type: String,
        require: true,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },


});


module.exports = model("Foro", forum);

