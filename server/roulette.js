class Roulette {
  constructor() {
    this.position = 0;

    do {
      this.length = Math.floor(Math.random() * 10000);
      this.bullets = Math.floor(Math.random() * this.length / 2) - 1;
    } while(this.length < 6 || this.bullets < 1);

    this.rotate();
  }

  rotate() {
    this.position = Math.floor(Math.random() * this.length);
  }

  shot() {
    if (this.position < this.bullets) {
      return false;
    }

    ++this.position;
    this.position %= this.length;

    return true;
  }

  toJSON() {
    return {
      length: this.length,
      bullets: this.bullets,
    };
  }
}

module.exports = Roulette;
