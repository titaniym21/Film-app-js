'use strict';

/** @module classOverview */

/**
 * Module: classOverview~Overview. <br/>
 * The Overview class creates an HTMLElement.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Overview {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.overview = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = `${obj.overview}`;
        this.overview.appendChild(this.p);
        return this.overview;
    }
}

module.exports = { Overview };