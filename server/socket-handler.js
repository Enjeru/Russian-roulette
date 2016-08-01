module.exports = socket => {
  if (players.length === 2) {
    socket.disconnect();

    return;
  }

  players.push(socket);

  if (players.length === 2) {
    start();
  }
};