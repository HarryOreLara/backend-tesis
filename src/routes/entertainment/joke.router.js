const { Router } = require("express");

const { postJoke,
    getOneJoke_ById,
    getLisAllJoke_byCreator,
    updateJoke,
    deleteJoke,
    getAllJoke,getOneJoke_ByNumeration } = require("../../controllers/entertainment/jokeController");
const verifyToken = require("../../middlewares/verifyToken");

const {createRespuestaJoke} = require("../../controllers/entertainment/respuestasJokeController");



const jokeRouter = Router();


jokeRouter.get("/getAll", [], getAllJoke);

jokeRouter.get("/getList/:id", [], getLisAllJoke_byCreator);

jokeRouter.get("/getOne/:id", [], getOneJoke_ById);

jokeRouter.post("/post", [verifyToken], postJoke);

jokeRouter.put("/update/:id", [], updateJoke);

jokeRouter.delete("/delete/:id", [], deleteJoke);

jokeRouter.get("/getOneNum/:id",[], getOneJoke_ByNumeration)




///Respuestas
jokeRouter.post("/resJoke/:id", [], createRespuestaJoke)


module.exports = jokeRouter;