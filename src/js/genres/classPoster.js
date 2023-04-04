'use strict';

class Poster {
    constructor(path) {
        this.posterInBox = document.createElement('img');
        this.posterInBox.classList.add('poster-in-box')
        this.posterInBox.src = `https://image.tmdb.org/t/p/w500${path}`;
        return this.posterInBox;
    }
}

module.exports = { Poster };