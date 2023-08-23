const { Router } = require("express");

const { postVoto,votoPositivo,votoNegativo } = require("../../controllers/entertainment/votosController");
//const verifyToken = require("../../middlewares/verifyToken");


const votoRouter = Router();



votoRouter.post("/post", [], postVoto);
votoRouter.post("/likes/:id", [], votoPositivo);
votoRouter.post("/dislikes/:id", [], votoNegativo);




module.exports = votoRouter;