
const { Router } = require("express");
const { sendMessage,mensaje } = require("../../controllers/messages/messageController");

const messageRouter = Router();

messageRouter.post('/sendMessage/:id',[], sendMessage)

messageRouter.post('/mensaje', [], mensaje);


module.exports = messageRouter;