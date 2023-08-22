const { Router } = require("express");

const { postMinigames,
    getOneMinigames_ById,
    getLisAllMinigames_byCreator,
    updateMinigames,
    deleteMinigames,
    getAllMinigames } = require("../../controllers/entertainment/minigameController");
const verifyToken = require("../../middlewares/verifyToken");
const minigamesRouter = Router();

minigamesRouter.get("/getAll", [], getAllMinigames);

minigamesRouter.get("/getList/:id", [], getLisAllMinigames_byCreator);

minigamesRouter.get("/getOne/:id", [], getOneMinigames_ById);

minigamesRouter.post("/post", [verifyToken], postMinigames);

minigamesRouter.put("/update/:id", [], updateMinigames);

minigamesRouter.delete("/delete/:id", [], deleteMinigames);

module.exports = minigamesRouter;