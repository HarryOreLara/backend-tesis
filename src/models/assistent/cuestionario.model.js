const { Schema, model } = require("mongoose");

const cuestionario = new Schema({
    nombre: String,
    fecha_respuesta: Date,
    respuestas: [respuestaSchema]
});

module.exports = model("Cuestionario", cuestionario);


// Colección "Personas":
// {
//     "_id": ObjectId("5f9d9a202cafd15a9b71e134"),
//     "nombre": "Persona 1",
//     "fecha_respuesta": ISODate("2023-08-21"),
//     "respuestas": [
//       { "pregunta_id": ObjectId("5f9e2a9c2cafd15a9b71e135"), "respuesta": "bien" },
//       { "pregunta_id": ObjectId("5f9e2a9c2cafd15a9b71e136"), "respuesta": "normal" },
//       // ... respuestas para las preguntas
//     ]
//   }
  
//   Consulta para contar respuestas "bien" en una pregunta específica:
//   Colección "Preguntas":
//   {
//     "_id": ObjectId("5f9e2a9c2cafd15a9b71e135"),
//     "texto": "¿Cómo te sientes hoy?",
//     "opciones": ["bien", "normal", "malo"]
//   }
  


//   db.Personas.aggregate([
//     { $unwind: "$respuestas" },
//     {
//       $match: {
//         "respuestas.respuesta": "bien"
//       }
//     },
//     {
//       $group: {
//         _id: "$respuestas.pregunta_id",
//         count: { $sum: 1 }
//       }
//     },
//     {
//       $lookup: {
//         from: "Preguntas",
//         localField: "_id",
//         foreignField: "_id",
//         as: "pregunta"
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         pregunta: { $arrayElemAt: ["$pregunta", 0] },
//         count: 1
//       }
//     }
//   ]);
  