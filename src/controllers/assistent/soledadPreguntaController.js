
const Soledad = require("../../models/assistent/preguntas_soledad.model");


const postPreguntaSoledad = async (req, res) => {
    const { contenido, puntuacion, items } = req.body;

    try {
        let soledad = await Soledad.findOne({ contenido });

        if (soledad) {
            return res.status(501).json({
                ok: false,
                msg: "Pregunta ya registrada"
            });
        }

        const lastSoledad = await Soledad.findOne({}, {}, { sort: { numeroDocumento: -1 }});
        const data = lastSoledad.numeroDocumento;
        const aumento = data +1;
        

        const newSoledad = new Soledad({contenido,puntuacion, items,numeroDocumento: aumento
        });
        await newSoledad.save();

        res.status(200).json({
            ok: true,
            msg: "Pregunta creada correctamente",
            newSoledad 
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
const getAllSoledad = async (req, res) => {

    try {
        const soledad = await Soledad.find().sort({ createdAt: -1 });
        return res.json({
            ok:true,
            soledad
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error al traer todas las preguntas'
        });
    }
};

const getOneSoledad_ByNumeration = async (req, res)=>{
    const {id} = req.params;

    const soledad = await Soledad.find({numeroDocumento: id});

    try {
        if (!soledad) {
            return res.status(404).json({
                ok: false,
                msg: "Pregunta no encontrada"
              });
        }
    
        return res.json({
            soledad
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error en busqueda'
        });
    }


}

module.exports = {
    postPreguntaSoledad,
    getAllSoledad,
    getOneSoledad_ByNumeration

}