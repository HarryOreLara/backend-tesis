const ResponseForum = require("../../models/forum/responseForum");

const createResponse = async (req, res) => {
    const { contenido, createdAt } = req.body;
    const {idf} = req.params;
    const id = req.uid;


    const mensaje = new ResponseForum({ contenido, idForo:idf, creador:id, createdAt});
    await mensaje.save();

    return res.status(200).json({ ok: true, message: "Mensaje enviado" });

};



const readAll = async (req, res) => {
    const {id} = req.params;

    try {
        let foro = await ResponseForum.find({idForo: id}).sort({createdAt: -1});
        if (!foro) {
            return res.json({
                ok: true,
                msg:"Foro no encontrado"
              });
        }
        return res.json({
            ok: true,
            foro
          });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "No existen respuestas, envia una respuesta"
          });
    }
};


module.exports = {
    createResponse, readAll
}