'use strict';

//const { delBoxSearch } = require("../search/functionDel");
import { delBoxSearch } from '../search/functionDel.js';

export class ButtonClose {
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('close-box-search');
        this.buttonClose.addEventListener('click', delBoxSearch);
        return this.buttonClose;
    }
}