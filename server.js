const express = require('express');
//nos permite trabajar y gestionar nuestras peticiones
const router = express.Router();
const PUERTO = 3000;

var app = express();
//aqui añadinos router a la aplicacion de express
app.use(router);

router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});

router.post('/message', (req, res) => {
    res.send('Mensaje añadido');
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// })

app.listen(PUERTO);
console.log(`La aplicacion esta escucando en http://localhost:${PUERTO}`);