const { Schema, model } = require("mongoose");


const responseForum = new Schema({


    contenido: {
        type: String,
        require: true,
        require: true,
    },
    creador: {
        type: String,
        require: true,
        require: true,
    },
    idForo: {
        type: String,
        require: true,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },


});


module.exports = model("Respuestas_Foro", responseForum);

