const Persona = require("../../models/persona/persona.model");
const jwt = require("jsonwebtoken");


const getAllPersona = async (req, res) => {
    try {
        const persona = await Persona.find().sort({ createdAt: -1 });
    
        return res.json({
          ok: true,
          persona,
        });
      } catch (error) {
        return res.status(404).json({
          ok: false,
          msg: "Personas no encontradas no encontrado",
        });
      }
};





const getOnePersona_byId = async (req, res) => {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    try {
      return res.json({
          ok: true,
          persona
      });
  } catch (error) {
      return res.status(404).json({
          ok: false,
          msg: "Persona no encontrada"
      });
  }
};


// const getLisAllPersona_byId = async (req, res) => {

// };

const getPersona_by_idUsuario = async (req, res)=> {
    const {id} = req.params;
    const persona = await Persona.find({idUsuario:id});


    try {
        if (!persona) {
            return res.json({
                ok:false,
                msg:"Persona no encontrada"
            })
        }
    
        return res.json({
            ok: true,
            persona
        });
    } catch (error) {
        res.json({
            ok: false,
            msg: "Error en el servidor"
        });
    }


};

const postPersona = async (req, res) => {

    const { nombre, apellidos, edad, genero, dni, idUsuario, createdAt} = req.body;

    try {
        let persona = await Persona.findOne({ dni });

        if (persona) {
            return res.status(501).json({
                ok: false,
                msg: "Persona ya registrada"
            });
        }

        const newPersona = new Persona({ nombre, apellidos, edad, genero, dni, idUsuario, createdAt});

        try {
            await newPersona.save();
            
        } catch (error) {
            res.json({
                ok: false,
                msg: "Contactese con el administrador",
                error: error
            });
        }
        
        const payload ={
            id: newPersona.id,
            nombre: newPersona.nombre,
            apellidos: newPersona.apellidos,
            edad: newPersona.edad,
            genero: newPersona.genero,
            idUsuario: newPersona.idUsuario
        };

        //jwt.sign(payload, process.env.KEY_SECRET, {expiresIn:3000}, (error, token)=>{
        jwt.sign(payload, process.env.KEY_SECRET, (error, token)=>{
            res.json({
                ok:true,
                id: newPersona.id,
                nombre: newPersona.nombre,
                msg:"Perfil Creado",
                token
            })
        });

    } catch (error) {
        res.json({
            ok: false,
            msg: "Error al registrar"
        });
    }

};

const updatePersona = async (req, res) => {
    const {id} = req.params;

    const { nombre, apellidos, edad, genero, dni} = req.body;

    try {
        const persona = await Persona.findByIdAndUpdate(id, {nombre,apellidos,genero,edad,dni}, {new:true});
        return res.json({
            ok: true,
            msg:"Perfil actualizado",
            persona
        });
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "Perfil no actualizado"
        });
    }

};



// const deletePersona = async (req, res) => {

// };


module.exports = {
    postPersona,
    updatePersona,
    getAllPersona
    ,getOnePersona_byId,
    getPersona_by_idUsuario
}