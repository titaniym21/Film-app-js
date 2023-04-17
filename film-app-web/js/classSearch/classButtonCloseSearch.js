'use strict';

//const { delBoxSearch } = require('../search/functionDel');
import { delBoxSearch } from '../search/functionDel.js';
/** @module classButtonCloseSearch */

/**
 * Module: classButtonCloseSearch~ButtonCloseSearch. <br/>
 * The ButtonCloseSearch class creates an HTMLElement and attaches a listener to it.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

export class ButtonCloseSearch {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('close-box-search');
        this.buttonClose.addEventListener('click', delBoxSearch);
        return this.buttonClose;
    }
}