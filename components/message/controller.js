
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
        console.log(fullMessage);
        resolve(fullMessage);
    })
}

module.exports = {
    addMessage,
};