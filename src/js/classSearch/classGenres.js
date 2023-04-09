'use strict';

class Genres {
    constructor(obj) {
        this.genres = document.createElement('div');
        this.genres.textContent = getGenres(obj.genres);
        return this.genres;
    }
}

module.exports = { Genres };