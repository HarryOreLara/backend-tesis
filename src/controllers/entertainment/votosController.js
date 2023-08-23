const Votos = require("../../models/entertainment/votos.model");
const Joke = require("../../models/entertainment/joke.model");


const postVoto = async (req,res)=>{
    const {likes, dislikes} = req.body;

    const newVoto = new Votos({likes, dislikes});
    await newVoto.save();

        res.status(200).json({
            ok: true,
            msg: "Collection voto creado correctamente",
            newVoto 
        });
}

//64e6225f2f01ffac078b6fe2
const votoPositivo = async (req, res) => {
    const votoId = '64e6225f2f01ffac078b6fe2';
    //const jokeId = '64e4f325fa5fdac29c95e09f';
    const {id} = req.params;


    try {
        // Buscar el documento por el ID
        const busqueda = await Votos.findById(votoId);
        const searchJoke = await Joke.findById(id);

        if (!busqueda) {
            return res.status(404).json({ ok: false, message: 'Voto no encontrado' });
        }
        if (!searchJoke) {
            return res.status(404).json({ ok: false, message: 'Chiste no encontrado' });
        }

        // Actualizar el campo "likes" incrementando en 1
        busqueda.likes += 1;
        searchJoke.votos.likes +=1;

        // Guardar la actualización
        await busqueda.save();
        await searchJoke.save();

        //return res.json({ ok: true, votoActualizado: busqueda, chisteActualizado: searchJoke  });
        return res.json({ ok: true });

    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error en el servidor' });
    }
};


const votoNegativo = async (req, res) => {
    const votoId = '64e6225f2f01ffac078b6fe2';
    //const jokeId = '64e4f325fa5fdac29c95e09f';
    const {id} = req.params;



    try {
        // Buscar el documento por el ID
        const busqueda = await Votos.findById(votoId);
        const searchJoke = await Joke.findById(id);


        if (!busqueda) {
            return res.status(404).json({ ok: false, message: 'Voto no encontrado' });
        }

        if (!searchJoke) {
            return res.status(404).json({ ok: false, message: 'Chiste no encontrado' });
        }

        // Actualizar el campo "likes" incrementando en 1
        busqueda.dislikes += 1;
        searchJoke.votos.dislikes +=1;

        // Guardar la actualización
        await busqueda.save();
        await searchJoke.save();

        //return res.json({ ok: true, votoActualizado: busqueda, chisteActualizado: searchJoke });
        return res.json({ ok: true });

    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error en el servidor' });
    }
};

module.exports = {
    
    postVoto,
    votoPositivo,
    votoNegativo
}