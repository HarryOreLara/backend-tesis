const { Schema, model } = require("mongoose");


const chat = new Schema({
    idEmisor: {
        type: String,
        require: true,
        trim: true,
    },
    idReceptor: {
        type: String,
        require: true,
        trim: true,
    },
    nombreReceptor: {
        type: String,
        require: true,
        require: true,
    },
    nombreEmisor: {
        type: String,
        require: true,
        require: true,
    },
    createdAt: {
        type: Date,
      },


});


module.exports = model("Chat", chat);

