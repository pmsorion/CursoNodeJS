const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

const PUERTO = 3000;
const URL = 'mongodb+srv://db_user:alotWdGOx73njYqE@cluster0-6afsn.mongodb.net/test?retryWrites=true&w=majority';

db(URL);

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(PUERTO);
console.log(`La aplicacion esta escucando en http://localhost:${PUERTO}`);