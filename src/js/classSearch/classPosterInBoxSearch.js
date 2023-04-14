'use strict';

/** @module classPosterInBoxSearch */

/**
 * Module: classPosterInBoxSearch~PosterInBox. <br/>
 * The PosterInBox class creates an HTMLElement with a movie poster.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class PosterInBox {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.posterInBox = document.createElement('img');
        this.posterInBox.classList.add('poster-in-box')
        this.posterInBox.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        return this.posterInBox;
    }
}

module.exports = { PosterInBox };