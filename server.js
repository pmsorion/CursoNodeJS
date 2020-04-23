const express = require('express');
const bodyparser = require('body-parser');
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
    res.send('Lista de mensajes');
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send(`Mensaje ${req.body.text} añadido correctamente`);
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// })

app.listen(PUERTO);
console.log(`La aplicacion esta escucando en http://localhost:${PUERTO}`);