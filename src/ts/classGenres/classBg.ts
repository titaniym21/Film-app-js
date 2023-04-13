
class Bg {
  public bg: HTMLElement;

  constructor() {
    this.bg = document.createElement('section');
    this.bg.classList.add('bg2');
    this.bg.setAttribute('id', 'bgGenre');
    return this;
  }
}

module.exports = { Bg };