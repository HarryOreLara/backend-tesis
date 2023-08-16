const {Schema , model} = require("mongoose");


const medicine = new Schema({

    nombre:{
        type: String,
        required: true,
        trim:true
    },
    cantidadMedicamentos:{
        type: Number,
        required:true
    },
    horaInicio:{
        type: String,
        trim: true,
    },
    horaIntermedio:{
        type: String,
        trim: true,
    },
    horaFin:{
        type: String,
        trim: true,
    },
    creator:{
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Persona"
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = model("Medicine", medicine);