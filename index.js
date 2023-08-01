//Importaciones de ejecucion
require("dotenv").config();
//const { version } = require("./package.json")
//Importaciones de express
const express = require("express");
const cors = require("cors");
//CONFIGURACIONES de variables de entorno
const app = express();
const path = require("path");


app.use(cors());
app.use(express.json());


app.use("/", express.static(__dirname + "/src/public"));

//SERVER
app.listen(process.env.PORT, () => {
    console.log("Aplicacion corriendo en el puerto 3000");
})