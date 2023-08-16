const Medicine = require("../../models/medicines/medicine.model");


// const getAllMedicine =  async (req, res)=>{
//     try{
//         const medicine = await Medicine.find().sort({createdAt: -1});

//         return res.json({
//             ok:true,
//             medicine
//         });
//     }catch(error){
//         return res.status(404).json({
//             ok: false,
//             msg: "No hay medicinas"
//         });
//     }
// };


// const getOneMedicine_ById =  async (req, res)=>{
//     const {nombre, _id} = req.params;

//     try{
//         const medicine = await Medicine.findById({_id});

//         if (!medicine) {
//             return res.status(404).json({
//                 ok: false,
//                 msg: "Medicina no encontrada"
//               });
//         }

//         return res.json({
//             ok:true,
//             medicine
//         });
//     }catch(error){
//         return res.status(500).json({
//             ok: false,
//             msg: "Error en el servidor"
//           });
//     }
// };



// //creator
// const getLisAllMedicine_byId =  async (req, res)=>{

// };


const postMedicine =  async (req, res)=>{
    const { nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin } = req.body;
    const id = req.uid;

    try {

        let medicine = await Medicine.findOne({ nombre });

        //if (medicine.creator == id && medicine.nombre == nombre) {
        if (medicine) {
            return res.status(501).json({
                ok:false,
                medicina: medicine,
                elquecrea: creador,
                id_token: id
            });
        }


        const newMedicine = new Medicine({nombre, cantidadMedicamentos,horaInicio, horaIntermedio,horaFin, creator:id})
        // await newMedicine.save();

        res.status(200).json({
            ok:true,
            msg:"Medicina guardada",
            newMedicine
        });

    } catch (error) {
        res.json({
            ok: false,
            msg: "Error al guardar"
        });
    }
};

// const updateMedicine =  async (req, res)=>{

// };


// const deleteMedicine =  async (req, res)=>{

// };


module.exports = {

    postMedicine, 
}