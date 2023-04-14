'use strict';

const getElemFromList = require('../search/getElemFromList');

/** @module classBgForList */

/**
 * Module: classBgForList~Bg. <br/>
 * The Bg class creates the root HTMLElement for the search result window.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Bg {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.bg = document.createElement('section');
        this.bg.classList.add('bg2');
        this.bg.addEventListener('click', getElemFromList);
        return this.bg;
    }
}

module.exports = { Bg };