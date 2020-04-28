const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'uploads/'
});

router.get('/', (req, res) => {
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch( e => {
            response.error(req, res, 'Unespected Error', 500, e);
        })
});

router.post('/', upload.single('file'),  (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then( (fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch( e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controller');
        })
});

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
    //res.send('ok');
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(re, res, `Usuario ${req.params.id} se ha eliminado`, 200);
        })
        .catch( e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router;