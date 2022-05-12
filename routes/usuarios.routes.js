const { Router } = require('express');
const { getUsuario, deleteUsuario, postUsuario, putUsuario, patchUsuario } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', getUsuario);

router.put('/:id', putUsuario);

router.post('/', postUsuario);

router.delete('/', deleteUsuario);

router.patch('/', patchUsuario);

module.exports = router;