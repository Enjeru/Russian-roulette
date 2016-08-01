const io = require('socket.io-client');

const socket = io('http://localhost:8080');

socket.on('your_turn', () => {
  socket.emit('turn', Math.random() < 0.5);
});
