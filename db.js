const db = require('mongoose');

db.Promise = global.Promise;

async function connect(URL) {
    await db.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'platzinodejs_db'
    });
    console.log('[db] Conectada con exito');
}

module.exports = connect;