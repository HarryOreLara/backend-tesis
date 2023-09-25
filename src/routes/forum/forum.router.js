const { Router } = require("express");

const {createForo, readForo, deleteForo} = require("../../controllers/forum/forumController");
const verifyToken = require("../../middlewares/verifyToken");
const forumRouter = Router();

forumRouter.post('/create', [verifyToken], createForo);

forumRouter.get('/readAll', [verifyToken], readForo);

forumRouter.delete('/delete/:id', [verifyToken], deleteForo);


module.exports = forumRouter;