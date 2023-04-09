'use strict';

const getElemFromList = require('../search/getElemFromList');

class Bg {
    constructor() {
        this.bg = document.createElement('section');
        this.bg.classList.add('bg2');
        this.bg.addEventListener('click', getElemFromList);
        return this.bg;
    }
}

module.exports = { Bg };