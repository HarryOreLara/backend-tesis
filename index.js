//Importaciones de ejecucion
//BaseDatos: DB_CONNECTION = mongodb+srv://harry:root@cluster0.aniauvv.mongodb.net/dicta?retryWrites=true&w=majority
require("dotenv").config();
//const { version } = require("./package.json")
//Importaciones de express
const express = require("express");
const cors = require("cors");
//CONFIGURACIONES de variables de entorno
const conexionDB = require("./src/db/config");
const app = express();
conexionDB()





//Importaciones de rutas
const authRouter = require("./src/routes/auth/auth.router");
const personaRouter = require("./src/routes/persona/persona.router");
const medicineRouter = require("./src/routes/medicines/medicines.router");
const jokeRouter = require("./src/routes/entertainment/joke.router");
const minigamesRouter = require("./src/routes/entertainment/minigames.router");
const musicRouter = require("./src/routes/entertainment/music.router");
const videosRouter = require("./src/routes/entertainment/videos.router");
const votoRouter = require("./src/routes/entertainment/voto.router");
const assistentRouter = require("./src/routes/assistent/assistent.router");



app.use(cors());
app.use(express.json());


app.use("/", express.static(__dirname + "/src/public"));
//RUTAS DINAMICAS
app.use("/auth/", authRouter);
app.use("/persona", personaRouter);
app.use("/medicines", medicineRouter);
app.use("/joke", jokeRouter);
app.use("/minigame", minigamesRouter);
app.use("/music", musicRouter);
app.use("/video", videosRouter);
app.use("/voto", votoRouter);
app.use("/assistent", assistentRouter);











//SERVER
app.listen(process.env.PORT || 3000, () => {
    console.log("Aplicacion corriendo en el puerto 3000");
})