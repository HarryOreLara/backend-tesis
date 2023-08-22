const { Router } = require("express");

const { postJoke,
    getOneJoke_ById,
    getLisAllJoke_byCreator,
    updateJoke,
    deleteJoke,
    getAllJoke } = require("../../controllers/entertainment/jokeController");
const verifyToken = require("../../middlewares/verifyToken");

const jokeRouter = Router();


jokeRouter.get("/getAll", [], getAllJoke);

jokeRouter.get("/getList/:id", [], getLisAllJoke_byCreator);

jokeRouter.get("/getOne/:id", [], getOneJoke_ById);

jokeRouter.post("/post", [verifyToken], postJoke);

jokeRouter.put("/update/:id", [], updateJoke);

jokeRouter.delete("/delete/:id", [], deleteJoke);



module.exports = jokeRouter;