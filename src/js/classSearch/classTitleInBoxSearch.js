'use strict';

/** @module classTitleInBoxSearch */

/**
 * Module: classTitleInBoxSearch~TitleInBox. <br/>
 * The TitleInBox class creates an HTMLElement with the title of the movie.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class TitleInBox {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.classList.add('title-in-box');
        this.title.setAttribute('alt', obj.id);
        this.title.textContent = `${obj.title}`;
        return this.title;
    }
}

module.exports = { TitleInBox };