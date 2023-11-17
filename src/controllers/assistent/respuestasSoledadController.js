const RespuestasSoledad = require("../../models/assistent/respuesta.soledad.model");

const createRespuestaSole = async (req, res) => {
    const { id } = req.params;
    try {
        const { preguntasPuntuadas, createdAt } = req.body;

        const respuesta = new RespuestasSoledad({ idPersona: id, preguntasPuntuadas: preguntasPuntuadas, createdAt: createdAt });

        await respuesta.save();

        res.status(201).json({ mensaje: 'Respuesta guardada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar la respuesta' });
    }

};


const respuestaByPersonaSoledad = async (req, res) => {
    const { id } = req.params;
    try {
        const respuestaPersonaSoledad = await RespuestasSoledad.find({ idPersona: id });

        if (!respuestaPersonaSoledad) {
            return res.status(404).json({
                msg: "No hay respuestas"
            });
        }

        return res.json({
            respuestaPersonaSoledad
        });
    } catch (error) {

    }
}



module.exports = {
    createRespuestaSole,
    respuestaByPersonaSoledad
}