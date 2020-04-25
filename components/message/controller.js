const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] no hay usuario o mensaje');
            reject('Datos incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
        store.add(fullMessage);
        console.log(fullMessage);
        resolve(fullMessage);
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {
    console.log(`${id}   ${message}`);
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }

        const result =  await store.updateText(id, message);
        resolve(result);
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
};