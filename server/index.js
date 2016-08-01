const io = require('socket.io')(8080);
const config = require('./config');
const Round = require('./round');

const players = [];

function handler(socket) {
  if (players.length === 2) {
    socket.disconnect();

    return;
  }

  players.push(socket);

  if (players.length === 2) {
    start();
  } else {
    require('../your-bot');
  }
}

const score = [0, 0];
let count = config.count;

function start() {
  --count;

  (new Round(players)).turn(Math.floor(Math.random() * 2)).on('win', winner => {
    ++score[winner];

    if (count) {
      console.log(`Round ${config.count - count}: ended. ${count} rounds left.`);

      start();
    } else {
      console.log(`Score: ${score.join(' : ')}`);
      process.exit();
    }
  });
}

io.on('connection', handler);

require('../our-bot');
