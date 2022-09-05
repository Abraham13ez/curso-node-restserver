
const { response, request } = require('express');


const usuariosGet = (req = request,res = response) =>{

    const {id, q} = req.query;

    res.json({
        msg: 'get Api - Controlador',
        id,
        q
    });
}

const usuariosPost = (req,res = response) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post Api - Controlador',
        nombre,edad
    });
}

const usuariosPut = (req,res = response) =>{
    res.json({
        msg: 'put Api - Controlador'
    });
}

const usuariosPatch = (req,res = response) =>{
    res.json({
        msg: 'patch Api - Controlador'
    });
}

const usuariosDelete = (req,res = response) =>{
    res.json({
        msg: 'Delete Api - Controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}