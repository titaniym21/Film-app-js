'use strict';

const { getGenres } = require('../search/getData');

/** @module classGenres */

/**
 * The Genres class creates an HTMLElement. <br/>
 * The Genres class uses various functions of the getData module: <br/>
 * [getGenres]{@link module:getData~getGenres}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Genres {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.genres = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = getGenres(obj.genres);
        this.genres.append(this.p);
        return this.genres;
    }
}

module.exports = { Genres };