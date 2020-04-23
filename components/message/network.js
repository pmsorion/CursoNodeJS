const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Error inesperado');
});
router.post('/', (req, res) => {
    console.log(req.query);
    if (req.query.error =='ok') {
        response.error(req, res, 'Error al crear desde server', 500, 'Es una simulacion de los errores');
    } else {
        response.success(req, res, 'Creado correctamente desde server', 201);
    }
});

module.exports = router;