const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');

const bodyparser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');


db(config.dbURL);

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use(`/${config.publicRoute}`, express.static('public'));

server.listen(config.port, () => {
    console.log(`La aplicacion esta escucando en ${config.host}${config.port}`);
});
