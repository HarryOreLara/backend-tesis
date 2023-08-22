const { Router } = require("express");

const { postMusic,
    getOneMusic_ById,
    getLisAllMusic_byCreator,
    updateMusic,
    deleteMusic,
    getAllMusic } = require("../../controllers/entertainment/musicController");
const verifyToken = require("../../middlewares/verifyToken");
const musicRouter = Router();

musicRouter.get("/getAll", [], getAllMusic);

musicRouter.get("/getList/:id", [], getLisAllMusic_byCreator);

musicRouter.get("/getOne/:id", [], getOneMusic_ById);

musicRouter.post("/post", [verifyToken], postMusic);

musicRouter.put("/update/:id", [], updateMusic);

musicRouter.delete("/delete/:id", [], deleteMusic);


module.exports = musicRouter;