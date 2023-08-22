const { Router } = require("express");

const { postVideo,
    getOneVideo_ById,
    getLisAllVideo_byCreator,
    updateVideo,
    deleteVideo,
    getAllVideo } = require("../../controllers/entertainment/videoController");
const verifyToken = require("../../middlewares/verifyToken");


const videosRouter = Router();

videosRouter.get("/getAll", [], getAllVideo);

videosRouter.get("/getList/:id", [], getLisAllVideo_byCreator);

videosRouter.get("/getOne/:id", [], getOneVideo_ById);

videosRouter.post("/post", [verifyToken], postVideo);

videosRouter.put("/update/:id", [], updateVideo);

videosRouter.delete("/delete/:id", [], deleteVideo);


module.exports = videosRouter;