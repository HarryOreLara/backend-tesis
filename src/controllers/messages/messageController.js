const Message = require("../../models/messages/message.model");
const Mensaje = require("../../models/messages/mensaje.model");
const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
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



const sendMessage = async (req, res) => {
  const { sender, time, text, leido } = req.body;
  const {id} = req.params;
  const room = sender.id;

  if (!text || typeof text !== 'string' || !room || typeof room !== 'string') {
    return res.status(400).json({ success: false, error: 'Datos de entrada no válidos' });
  }
  const receptor = room;
  const nuevoMensaje = new Message({emisor:id ,receptor, time, text, leido});
  await nuevoMensaje.save();

  
  io.to(room).emit('newMessage', text);
  return res.status(200).json({ ok: true, message: text });
  //return res.status(200).json({ ok: true, message: id });
};



const mensaje = async (req, res)=>{

  const {mensaje, emisor, receptor, leido} = req.body;

  const nuevoMensaje = new Mensaje({mensaje, emisor, receptor, leido});
  await nuevoMensaje.save();

  return res.status(200).json({ ok: true, message: "Mensaje enviado" });


}


module.exports = {
  sendMessage,
  mensaje
}

