const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .cath(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .cath(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;