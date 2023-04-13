'use strict';

class Genres {
    constructor(obj) {
        this.genres = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = getGenres(obj.genres);
        this.genres.append(this.p);
        return this.genres;
    }
}

module.exports = { Genres };