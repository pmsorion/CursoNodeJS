const express = require('express');
const bodyparser = require('body-parser');
const response = require('./network/response');
//nos permite trabajar y gestionar nuestras peticiones
const router = express.Router();
const PUERTO = 3000;

var app = express();
//se debe usar primero el bodyparser antes que 
//router o de lo contrario nos arroja undefined
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//aqui añadinos router a la aplicacion de express
app.use(router);


router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes personalizada desde server');
    //res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    console.log(req.query);
    if (req.query.error =='ok') {
        response.error(req, res, 'Error al crear desde server', 401);
    } else {
        response.success(req, res, 'Creado correctamente desde server', 201);
    }
    
});


app.listen(PUERTO);
console.log(`La aplicacion esta escucando en http://localhost:${PUERTO}`);