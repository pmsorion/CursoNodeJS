const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyparser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

const PORT = 3000;
const URL = 'mongodb+srv://db_user:alotWdGOx73njYqE@cluster0-6afsn.mongodb.net/test?retryWrites=true&w=majority';

db(URL);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(PORT, () => {
    console.log(`La aplicacion esta escucando en http://localhost:${PORT}`);
});
