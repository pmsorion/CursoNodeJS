const db = require('mongoose');

db.Promise = global.Promise;
//'mongodb+srv://db_user:alotWdGOx73njYqE@cluster0-6afsn.mongodb.net/test?retryWrites=true&w=majority'

async function connect(URL) {
    await db.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'platzinodejs_db'
    });
    console.log('[db] Conectada con exito');
}

module.exports = connect;