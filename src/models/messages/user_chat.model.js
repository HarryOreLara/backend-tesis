const { Schema, model } = require("mongoose");


const UsuarioChat = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    imgUrl: {
        type: String,
        trim: true,
    },
    isOnline: {
        type: Boolean,
        require: true,
    },


});


module.exports = model("UsuarioChat", UsuarioChat);


