const io = require('socket.io')();
io.listen(3000);
io.on('connection', (socket) => {
    console.log('A new client has connected');
});
io.on('connection', (socket) => {
    console.log('A new client has connected');
    socket.on('message', (data) => {
        console.log('Received message from client:', data);
    });
});