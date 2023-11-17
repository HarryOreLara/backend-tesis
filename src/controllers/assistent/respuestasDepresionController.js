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


const respuestaByPersonaDepresion = async (req, res) => {
    const { id } = req.params;
    try {
        const respuestaPersonaDepresion = await RespuestaDepresion.find({ idPersona: id });

        if (!respuestaPersonaDepresion) {
            return res.status(404).json({
                msg: "No hay respuestas"
            });
        }

        return res.json({
            respuestaPersonaDepresion
        });
    } catch (error) {

    }
}





module.exports = {
    createRespuestaDepre,
    respuestaByPersonaDepresion
}