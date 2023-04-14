'use strict';

/** @module classBoxSearch */

/**
 * Module: classBoxSearch~BoxSearch. <br/>
 * The BoxSearch class creates an HTMLElement.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class BoxSearch {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.boxSearch = document.createElement('div');
        this.boxSearch.classList.add('box-search');
        return this.boxSearch;
    }
}

module.exports = { BoxSearch };