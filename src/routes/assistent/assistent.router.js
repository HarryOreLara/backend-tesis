const { Router } = require("express");

const { postPreguntaSoledad, getAllSoledad, getOneSoledad_ByNumeration } = require("../../controllers/assistent/soledadPreguntaController");
const { postPreguntaDepresion, getAllDepresion, getOneDepresion_ByNumeration } = require("../../controllers/assistent/depresionPreguntaController");
const {createRespuestaSole, respuestaByPersonaSoledad} = require("../../controllers/assistent/respuestasSoledadController");
const {createRespuestaDepre, respuestaByPersonaDepresion} = require("../../controllers/assistent/respuestasDepresionController");


const verifyToken = require("../../middlewares/verifyToken");

const assistentRouter = Router();


//Soledad
assistentRouter.post("/postSoledad", [], postPreguntaSoledad);
assistentRouter.get("/getAllSoledad", [], getAllSoledad);
assistentRouter.get("/getOneSole/:id", [], getOneSoledad_ByNumeration);



//Depresion
assistentRouter.post("/postDepresion", [], postPreguntaDepresion);
assistentRouter.get("/getAllDepresion", [], getAllDepresion);
assistentRouter.get("/getOneDepre/:id", [], getOneDepresion_ByNumeration);



//Respuestas
assistentRouter.post("/resDepresion/:id", [], createRespuestaDepre);
assistentRouter.post("/resSoledad/:id", [], createRespuestaSole);


//Traer respuestas por el ID de la persona
assistentRouter.get("/getResSoledadPerson/:id", [], respuestaByPersonaSoledad);//Soledad
assistentRouter.get("/getResDeprePerson/:id", [], respuestaByPersonaDepresion);//Depresion


module.exports = assistentRouter;