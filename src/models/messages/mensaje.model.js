const { Schema, model } = require("mongoose");


const mensaje = new Schema({
    mensaje:{
        type: String,
    },
    emisor: {
        type: String,
        trim: true,
    },
    receptor: {
        type: String,
        trim: true,
    },
    leido: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
      },
});


module.exports = model("Mensaje", mensaje);


