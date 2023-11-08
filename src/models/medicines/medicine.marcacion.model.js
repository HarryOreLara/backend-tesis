const {Schema , model} = require("mongoose");


const medicineMarcacion = new Schema({

    nombre:{
        type: String,
        required: true,
        trim:true
    },
    idMedicine:{
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Medicine"
    },
    creator:{
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Persona"
    },
    createdAt:{
        type: Date,
    }
});

module.exports = model("Marcacion Medicina", medicineMarcacion);