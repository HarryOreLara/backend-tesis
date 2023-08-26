const Usuario = require("../../models/usuario/usuario.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res)=>{//aprobado
    const { username, password } = req.body;

    try {
        let usuario = await Usuario.findOne({username});

        if (usuario) {
            return res.status(501).json({
                ok:false,
                msg:"Dni ya registrado"
            });
        }

        const nuevoUsuario = new Usuario({ username, password, estado: 'activo' });
        const salt = bcryptjs.genSaltSync(12);
        nuevoUsuario.password = bcryptjs.hashSync(password, salt);
        await nuevoUsuario.save();

        const payload ={
            id: nuevoUsuario.id,
            dni: nuevoUsuario.username,

        };

        jwt.sign(payload, process.env.KEY_SECRET, (error, token)=>{
            res.json({
                ok:true,
                id: nuevoUsuario.id,
                username,
                msg:"usuario Creado",
                token
            })
        });

    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:"Error al registrar"
        });
    }
}


const loginUser = async (req, res)=>{//aprobado
    
    const {username, password} = req.body;

    try {
        let usuario = await Usuario.findOne({username});

        if (!usuario) {
            return res.status(401).json({
                ok:false,
                msg:"correo o contraseña invalida"
            });
        }

        const passwordValido = bcryptjs.compareSync(password, usuario.password);

        if (!passwordValido) {
            return res.status(401).json({
                ok: false,
                msg: "Correo o contraseña invalida"
            });
        }

        const payload = {
            id:usuario.id
        }

        jwt.sign(payload, process.env.KEY_SECRET, (error, token) => {//para firmar el jason web token
            return res.json({
                ok: true,
                id: usuario.id,
                username: usuario.username,
                msg: "Inicio de Sesion exitoso",
                token
            });
        });

    } catch (error) {
        console.log(error)
        res.json({
            ok: false,
            msg: "Error al iniciar sesion"
        });
    }

}


module.exports = {
    registerUser,
    loginUser
}