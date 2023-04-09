'use strict';

class Poster {
    constructor(obj) {
        this.poster = document.createElement('img');
        this.poster.classList.add('poster');
        this.poster.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        return this.poster;
    }
}

module.exports = { Poster };