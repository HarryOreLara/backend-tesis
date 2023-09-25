const RespuestasSoledad = require("../../models/assistent/respuesta.soledad.model");

const createRespuestaSole = async (req, res)=>{
    const {id} = req.params;
    try {
        const{preguntasPuntuadas} = req.body;

        const respuesta = new RespuestasSoledad({idPersona: id, preguntasPuntuadas: preguntasPuntuadas});
    
        await respuesta.save();
    
        res.status(201).json({ mensaje: 'Respuesta guardada con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar la respuesta' });
    }

};



module.exports = {
    createRespuestaSole
}