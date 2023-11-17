const RespuestaJoke = require("../../models/entertainment/joke_respuestas.model");


const createRespuestaJoke = async (req, res) => {
    const { id } = req.params;

    try {
        const {nombrePersona,apellidoPersona, jokePuntuado, createdAt } = req.body;

        const respuesta = new RespuestaJoke({ idPersona: id,nombrePersona:nombrePersona, apellidoPersona:apellidoPersona, jokePuntuado: jokePuntuado, createdAt: createdAt });

        await respuesta.save();
        res.status(201).json({ mensaje: 'Respuesta guardada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al puntuar' });
    }
}



module.exports = {
    createRespuestaJoke
}