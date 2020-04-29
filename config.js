const config = {
    dbURL: process.env.DB_RRL || 'mongodb+srv://db_user:alotWdGOx73njYqE@cluster0-6afsn.mongodb.net/test?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost:',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config;