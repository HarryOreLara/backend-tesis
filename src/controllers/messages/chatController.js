const Chat = require("../../models/messages/chat.model");


const postChat = async (req, res)=>{
    const {idEmisor, idReceptor, nombreReceptor, nombreEmisor} = req.body;

    try {
        let chat = await Chat.findOne({idReceptor});

        if (chat) {
            return res.status(501).json({
                ok: false,
                msg: "Persona ya registrada"
            });
        }

        const newChat1 = new Chat({ idEmisor:idEmisor, idReceptor:idReceptor, nombreReceptor:nombreReceptor, nombreEmisor:nombreEmisor});
        const newChat2 = new Chat({ idEmisor:idReceptor, idReceptor:idEmisor, nombreReceptor:nombreEmisor, nombreEmisor:nombreReceptor});


        try {
            await newChat1.save();
            await newChat2.save();
            res.json({
                ok: true,
                msg: "Chat guardado",
                newChat1,
                newChat2
            });
        } catch (error) {
            res.json({
                ok: false,
                msg: "Contactese con el administrador",
                error: error
            });
        }


    } catch (error) {
        res.json({
            ok: false,
            msg: "Error al guardar"
        });
    }
};


const getAll = async (req, res)=>{
    const {id} = req.params;

    let chat = await Chat.find({idEmisor:id});

    try {
        return res.json({
            ok: true,
            chat,
          });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Personas no encontradas",
          });
    }
};


const getOne = async (req, res)=>{
    const {id, id2} = req.params;

    try {
        let chat = await Chat.find({idReceptor:id2, idEmisor: id});

        res.status(200).json({
            ok:true,
            chat
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Personas no encontrada",
          });
    }
};


module.exports = {
    postChat, getAll, getOne
}