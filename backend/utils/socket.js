    // backend/utils/socket.js
    const socketIo = require('socket.io');

    const initSocket = (server) => {
        const io = socketIo(server);
        io.on('connection', (socket) => {
            console.log('New client connected');
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    };

    module.exports = initSocket;