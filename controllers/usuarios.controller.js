const {request, response } = require('express');


const getUsuario = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - Desde el controlador'
    });
}

const putUsuario = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Desde el controlador',
        id
    });
}

const postUsuario = (req = request, res = response) => {
    
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: 'post API - Desde el controlador',
        nombre,
        edad
    })
}

const deleteUsuario = (req = request, res = response) => {
    res.json({
        msg: 'delete API - Desde el controlador'
    })
}

const patchUsuario = (req = request, res = response) => {
    res.json({
        msg: 'patch API - Desde el controlador'
    })
}

module.exports = {
    deleteUsuario,
    getUsuario,
    patchUsuario,
    postUsuario,
    putUsuario,
};