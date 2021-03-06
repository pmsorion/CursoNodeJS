const store = require('./store');
const socket = require('../../socket').socket;
const config = require('../../config');

function addMessage(user, message, file) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] no hay usuario o mensaje');
            reject('Datos incorrectos');
            return false;
        }

        let fileUlr = ''

        if (file) {
            fileUlr = `${config.host}${config.port}/${config.publicRoute}/${config.filesRoute}` + file.filename;
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
            file: fileUlr
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage)

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

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id Invalido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .cath(e => {
                reject(e);
        })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};