const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    const filterUser = req.query.user || null;
    controller.getUsers(filterUser)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch( e => {
        response.error(req, res, 'Unespected Error', 500, e);
    })
})

 router.post('/', (req, res) => {
     controller.addUser(req.body.name)
         .then(data => {
             response.success(req, res, data, 201);
         })
         .catch(err => {
             response.error(req, res, 'Internanl error', 500, err);
         });
 });

 module.exports = router;