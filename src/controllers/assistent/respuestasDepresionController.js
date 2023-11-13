const RespuestaDepresion = require("../../models/assistent/respuesta.depresion.model");

const createRespuestaDepre = async (req, res) => {
    const { id } = req.params;

    try {
        const { preguntasPuntuadas, createdAt } = req.body;

        const respuesta = new RespuestaDepresion({ idPersona: id, preguntasPuntuadas: preguntasPuntuadas, createdAt: createdAt });

        await respuesta.save();

        res.status(201).json({ mensaje: 'Respuesta guardada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar la respuesta' });
    }

};



module.exports = {
    createRespuestaDepre
}