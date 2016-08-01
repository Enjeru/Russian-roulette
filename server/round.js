const EventEmitter = require('events');
const Roulette = require('./roulette');
const config = require('./config');

class Round extends EventEmitter {
  constructor(players) {
    super();

    this.roulette = new Roulette();

    this.players = players;

    this.players.forEach(socket => {
      socket.emit('new_game', this.roulette.toJSON());
    });
  }

  turn(player) {
    const next = (player + 1) % 2;

    const timer = setTimeout(() => {
      this.emit('win', next);
    }, config.timeout);

    this.players[player].once('turn', isRotate => {
      clearTimeout(timer);

      if (isRotate) {
        this.roulette.rotate();
      }

      if (this.roulette.shot()) {
        this.players[next].emit('opponent_turn', isRotate);

        this.turn(next);
        return;
      }

      this.emit('win', next);
    });

    this.players[player].emit('your_turn');

    return this;
  }
};

module.exports = Round;
