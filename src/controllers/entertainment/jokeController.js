
const Joke = require("../../models/entertainment/joke.model");


const postJoke = async (req, res) => {
    const { contenido,
        categoria,
        nivelDificultad,
        idioma,
        popularidad,
        votos,
        fuente,
        imagenUrl } = req.body;

    const id = req.uid;

    try {
        let joke = await Joke.findOne({ contenido });

        if (joke) {
            return res.status(501).json({
                ok: false,
                msg: "Chiste ya registrado"
            });
        }

        const lastJoke = await Joke.findOne({}, {}, { sort: { numeroDocumento: -1 }});
        const data = lastJoke.numeroDocumento;
        const aumento = data +1;
        

        const newJoke = new Joke({
            contenido,
            categoria,
            autor: id,
            nivelDificultad,
            idioma,
            popularidad,
            votos,
            fuente,
            imagenUrl,
            numeroDocumento: aumento
        });
        await newJoke.save();

        res.status(200).json({
            ok: true,
            msg: "Chiste creado correctamente",
            newJoke 
        });

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Configurar mensaje de error'
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
const getAllJoke = async (req, res) => {

    try {
        const joke = await Joke.find().sort({ createdAt: -1 });
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

const getOneJoke_ByNumeration = async (req, res)=>{
    const {id} = req.params;

    const joke = await Joke.find({numeroDocumento: id});

    try {
        if (!joke) {
            return res.status(404).json({
                ok: false,
                msg: "Chiste no encontrado"
              });
        }
    
        return res.json({
            joke
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error en busqueda'
        });
    }


}

module.exports = {

    postJoke,
    getOneJoke_ById,
    getLisAllJoke_byCreator,
    updateJoke,
    deleteJoke,
    getAllJoke,
    getOneJoke_ByNumeration

}