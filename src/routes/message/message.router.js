
const { Router } = require("express");
const { sendMessage } = require("../../controllers/messages/messageController");

const messageRouter = Router();

messageRouter.post('/sendMessage',[], sendMessage)


module.exports = messageRouter;