const { Schema, model } = require("mongoose");


const message = new Schema({
    emisor:{
        type: String,
        trim: true,
    },
    receptor: {
        type: String,
        trim: true,
    },
    time: {
        type: String,
        trim: true,
    },
    text: {
        type: String,
        trim: true,
    },
    leido: {
        type: Boolean,
    },
});


module.exports = model("Message", message);


