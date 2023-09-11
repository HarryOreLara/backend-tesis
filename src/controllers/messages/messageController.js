const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors:{
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Usuario conectado');
  
    socket.on('join', (room) => {
      socket.join(room);
    });
  
    socket.on('message', (data) => {
      // Aquí puedes procesar y guardar el mensaje en MongoDB
      io.to(data.room).emit('newMessage', data.message);
    });
  
    socket.on('disconnect', () => {
      console.log('Usuario desconectado');
    });
  });
  


const sendMessage = async (req, res)=>{
    const { message, room } = req.body;
    io.to(room).emit('newMessage', message); // Enviar el mensaje a la sala especificada
    res.status(200).json({ success: true });
};



module.exports = {
    sendMessage
}
