
const Depresion = require("../../models/assistent/preguntas_depresion.model");


const postPreguntaDepresion = async (req, res) => {
    const { contenido, puntuacion, items } = req.body;

    try {
        let depresion = await Depresion.findOne({ contenido });

        if (depresion) {
            return res.status(501).json({
                ok: false,
                msg: "Pregunta ya registrada"
            });
        }

        const lastDepresion = await Depresion.findOne({}, {}, { sort: { numeroDocumento: -1 }});
        const data = lastDepresion.numeroDocumento;
        const aumento = data +1;

        const newDepresion = new Depresion({contenido,puntuacion, items,numeroDocumento: aumento
        });
        await newDepresion.save();

        res.status(200).json({
            ok: true,
            msg: "Pregunta creada correctamente",
            newDepresion 
        });

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
};


const getOneJoke_ById = async (req, res) => {
    const {id} =  req.params;

    const joke = await Joke.findById(id);
    try {

        if (!joke) {
            return res.status(404).json({
                ok: false,
                msg: "Chiste no encontrado"
              });
        }

        return res.json({
            ok:true,
            joke
        });

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Configurar mensaje de error'
        });
    }
};



const getLisAllJoke_byCreator = async (req, res) => {

    try {

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Configurar mensaje de error'
        });
    }
};

const updateJoke = async (req, res) => {

    try {

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Configurar mensaje de error'
        });
    }
};
const deleteJoke = async (req, res) => {

    try {

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Configurar mensaje de error'
        });
    }
};
const getAllDepresion = async (req, res) => {

    try {
        const depresion = await Depresion.find().sort({ createdAt: -1 });
        return res.json({
            ok:true,
            depresion
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error al traer todas las preguntas'
        });
    }
};

const getOneDepresion_ByNumeration = async (req, res)=>{
    const {id} = req.params;

    const depresion = await Depresion.find({numeroDocumento: id});

    try {
        if (!depresion) {
            return res.status(404).json({
                ok: false,
                msg: "Pregunta no encontrada"
              });
        }
    
        return res.json({
            depresion
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error en busqueda'
        });
    }


}

module.exports = {
    postPreguntaDepresion,
    getAllDepresion,
    getOneDepresion_ByNumeration
}