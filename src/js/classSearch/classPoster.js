'use strict';

/** @module classPoster */

/**
 * Module: classPoster~Poster. <br/>
 * The Poster class creates an HTMLElement element for the poster.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Poster {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.poster = document.createElement('img');
        this.poster.classList.add('poster');
        this.poster.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        return this.poster;
    }
}

module.exports = { Poster };