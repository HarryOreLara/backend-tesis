const { Router } = require("express");

const {createResponse, readAll} = require("../../controllers/forum/reponseForumController");
const verifyToken = require("../../middlewares/verifyToken");
const responseForumRouter = Router();

responseForumRouter.post('/create/:idf', [verifyToken], createResponse);

responseForumRouter.get('/readAll/:id', [verifyToken], readAll);


module.exports = responseForumRouter;