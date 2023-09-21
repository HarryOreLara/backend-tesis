const { Router } = require("express");
const { check } = require("express-validator");
const verifyToken = require("../../middlewares/verifyToken");
const validationErrors = require("../../middlewares/validationErrors");
const {postPersona, updatePersona,getAllPersona,getOnePersona_byId, getPersona_by_idUsuario} = require("../../controllers/persona/personaController");


const personaRouter = Router();

personaRouter.get("/getAll",[verifyToken], getAllPersona);

personaRouter.get("/getOne/:id",[verifyToken], getOnePersona_byId);

// personaRouter.get("/getList",[], getLisAllPersona_byId);

personaRouter.post("/post",[], postPersona);

personaRouter.put("/update/:id",[verifyToken], updatePersona);

personaRouter.get('/getPersonaIdUser/:id',[], getPersona_by_idUsuario)

// personaRouter.get("/delete/:id",[], deletePersona);


module.exports = personaRouter;



