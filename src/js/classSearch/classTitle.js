'use strict';

/** @module classTitle */

/**
 * Module: classTitle~Title. <br/>
 * The Title class creates an HTMLElement.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Title {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.textContent = `${obj.title}`;
        return this.title;
    }
}

module.exports = { Title };