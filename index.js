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
const personaRouter = require("./src/routes/persona/persona.router");
const medicineRouter = require("./src/routes/medicines/medicines.router");



app.use(cors());
app.use(express.json());


app.use("/", express.static(__dirname + "/src/public"));
//RUTAS DINAMICAS
app.use("/persona", personaRouter);
app.use("/medicines", medicineRouter);











//SERVER
app.listen(process.env.PORT || 3000, () => {
    console.log("Aplicacion corriendo en el puerto 3000");
})