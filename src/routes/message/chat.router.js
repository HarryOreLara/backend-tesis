const { Router } = require("express");

const {postChat, getAll, getOne } = require("../../controllers/messages/chatController");

const chatRouter = Router();

chatRouter.post('/newChat', [], postChat);

chatRouter.get('/allChats/:id', [], getAll);

chatRouter.get('/oneChat/:id/:id2', [], getOne);


module.exports = chatRouter;