const Medicine = require("../../models/medicines/medicine.model");


const getAllMedicine =  async (req, res)=>{
    try{
        const medicine = await Medicine.find().sort({createdAt: -1});

        return res.json({
            ok:true,
            medicine
        });
    }catch(error){
        return res.status(404).json({
            ok: false,
            msg: "No hay medicinas"
        });
    }
};


const getOneMedicine_ById =  async (req, res)=>{
    const {id} = req.params;
    const medicine = await Medicine.findById(id);

    try{

        if (!medicine) {
            return res.status(404).json({
                ok: false,
                msg: "Medicina no encontrada"
              });
        }

        return res.json({
            ok:true,
            medicine
        });
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
          });
    }
};


const getLisAllMedicine_byCreator =  async (req, res)=>{
    const {id} = req.params;

    try {
        const medicineList = await Medicine.find({creator: id})
        return res.json({
            ok: true,
            medicineList
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor al buscar la medicina por el creador"
          });
    }
};


const postMedicine =  async (req, res)=>{
    const { nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin } = req.body;//clorfenamina
    const id = req.uid;//id Harry
    const creator = req.uid;

    try {

        let medicine = await Medicine.find({ nombre,creator });

        if (medicine.length === 0) {
            const newMedicine = new Medicine({nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin, creator:id})
            await newMedicine.save();
    
            res.status(200).json({
                ok:true,
                msg:"Medicina guardada",
                newMedicine
            });
        }else{
            return res.status(501).json({
                ok:false,
                msg:"Ya registrada"
            });
        }
    } catch (error) {
        res.json({
            ok: false,
            msg: "Error al guardar"
        });
    }
};


const updateMedicine =  async (req, res)=>{
    const {id} = req.params;
    const { nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin } = req.body;//clorfenamina

    try {
        const medicine = await Medicine.findByIdAndUpdate(id, {nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin}, {new:true});
        return res.json({
            ok: true,
            msg:"Medicina Actualizada",
            medicine
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Medicina no actualizada"
        });
    }
};


const deleteMedicine =  async (req, res)=>{
    const {id} = req.params;
    try {

        const medicine = await Medicine.findByIdAndRemove(id);
        
        return res.json({
            ok: true,
            msg:"Medicina eliminada",
            medicine
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Error al eliminar"
        });
    }

};


module.exports = {

    postMedicine,
    getOneMedicine_ById,
    getLisAllMedicine_byCreator,
    updateMedicine,
    deleteMedicine,
    getAllMedicine

}