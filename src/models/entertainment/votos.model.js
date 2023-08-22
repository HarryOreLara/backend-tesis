const { Schema, model } = require("mongoose");

const votos = new Schema({
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});


module.exports = model("Votos", votos);