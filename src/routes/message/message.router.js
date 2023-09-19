
const { Router } = require("express");
const { sendMessage,mensaje,getAllMensajeById,searchPerson } = require("../../controllers/messages/messageController");

const messageRouter = Router();

messageRouter.post('/sendMessage/:id',[], sendMessage)

messageRouter.post('/mensaje', [], mensaje);


messageRouter.get('/msgList', [], getAllMensajeById);

messageRouter.get('/search/:id', [], searchPerson);




module.exports = messageRouter;