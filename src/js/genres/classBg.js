'use strict';

class Bg {
    constructor() {
        this.bg = document.createElement('section');
        this.bg.classList.add('bg2');
        this.bg.setAttribute('id', 'bgGenre')
        return this.bg;
    }
}

module.exports = { Bg };