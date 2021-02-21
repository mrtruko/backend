const { Router } = require('express');
const { getUsuarios, setUsuarios } = require('./usuarios.controller')

const router = Router();

router.get('/', getUsuarios)
router.post('/', setUsuarios)

module.exports = router;