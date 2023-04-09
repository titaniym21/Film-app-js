'use strict';

class PosterInBox {
    constructor(obj) {
        this.posterInBox = document.createElement('img');
        this.posterInBox.classList.add('poster-in-box')
        this.posterInBox.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        return this.posterInBox;
    }
}

module.exports = { PosterInBox };