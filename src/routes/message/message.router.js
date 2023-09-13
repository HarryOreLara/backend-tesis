
const { Router } = require("express");
const { sendMessage,mensaje,getAllMensajeById } = require("../../controllers/messages/messageController");

const messageRouter = Router();

messageRouter.post('/sendMessage/:id',[], sendMessage)

messageRouter.post('/mensaje', [], mensaje);


messageRouter.get('/msgList', [], getAllMensajeById);


module.exports = messageRouter;