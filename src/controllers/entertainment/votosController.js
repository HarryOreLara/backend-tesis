const Votos = require("../../models/entertainment/votos.model");


const postVoto = async (req,res)=>{

}


const votoPositivo = async (req, res)=>{
    const {id} = req.params;
    const votoId = 'iddelabase de datos';

    const voto = await Votos.findByIdAndUpdate(votoId,
    { $inc: { 'votos.dislikes': 1 } },
    { new: true })


    if (!joke) {
        return res.status(404).json({ message: 'Chiste no encontrado' });
    }

    return res.status(200).json({ message: 'Voto negativo registrado' });


}


// // Ruta para actualizar votos positivos (likes)
// router.post('/jokes/:jokeId/like', async (req, res) => {
//     try {
//       const jokeId = req.params.jokeId;
//       const joke = await Joke.findByIdAndUpdate(
//         jokeId,
//         { $inc: { 'votos.likes': 1 } },
//         { new: true }
//       );
  
//       if (!joke) {
//         return res.status(404).json({ message: 'Chiste no encontrado' });
//       }
  
//       return res.status(200).json({ message: 'Voto positivo registrado' });
//     } catch (error) {
//       return res.status(500).json({ message: 'Error al actualizar los votos' });
//     }
//   });
  
//   // Ruta para actualizar votos negativos (dislikes)
//   router.post('/jokes/:jokeId/dislike', async (req, res) => {
//     try {
//       const jokeId = req.params.jokeId;
//       const joke = await Joke.findByIdAndUpdate(
//         jokeId,
//         { $inc: { 'votos.dislikes': 1 } },
//         { new: true }
//       );
  
//       if (!joke) {
//         return res.status(404).json({ message: 'Chiste no encontrado' });
//       }
  
//       return res.status(200).json({ message: 'Voto negativo registrado' });
//     } catch (error) {
//       return res.status(500).json({ message: 'Error al actualizar los votos' });
//     }
//   });



module.exports = {
    updateVoto
}