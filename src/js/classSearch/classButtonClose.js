'use strict';

const { delModalWindow } = require('../search/functionDel');

/** @module classButtonClose */

/**
 * Module: classButtonClose~ButtonClose. <br/>
 * The ButtonClose class creates an HTMLElement.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class ButtonClose {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('button-close');
        this.buttonClose.addEventListener('click', delModalWindow);
        return this.buttonClose;
    }
}

module.exports = { ButtonClose };