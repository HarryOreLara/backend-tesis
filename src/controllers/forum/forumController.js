const Forum = require("../../models/forum/forum");

const createForo = async (req, res) => {
    const { titulo, descripcion, createdAt } = req.body;
    const id = req.uid;

    try {
        let forito = await Forum.findOne({ titulo });

        if (forito) {
            res.status(501).json({
                ok: false,
                msg: "Foro ya registrado"
            });
        }

        const foro = new Forum({ titulo, descripcion, creator: id , createdAt});
        await foro.save();

        res.status(200).json({
            ok: true,
            foro
        });

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }

};

const readForo = async (req, res) => {
    try {
        const foro = await Forum.find().sort({ createdAt: -1 });
        return res.json({
            ok:true,
            foro
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "No hay foros"
        });
    }
};

const deleteForo = async (req, res) => {
    const {id} = req.params;
    try {
        const foro = await Forum.findByIdAndRemove(id);
        return res.json({
            ok: true,
            foro
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Error al eliminar"
        });
    }
};


module.exports = {
    createForo, readForo, deleteForo
}