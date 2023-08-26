const { Schema, model } = require("mongoose");


const usuario = new Schema({


    username: {
        type: String,
        unique: true,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    estado: {
        type: String,
        require: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },

});

module.exports = model("Usuario", usuario);