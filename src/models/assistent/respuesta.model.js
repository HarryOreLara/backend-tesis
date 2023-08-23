const { Schema, model } = require("mongoose");

const respuesta = new Schema({
    pregunta_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pregunta'
      },
      respuesta: String
});

module.exports = model("Respuesta", respuesta);