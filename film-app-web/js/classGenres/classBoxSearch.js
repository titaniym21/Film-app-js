'use strict';
//const getElemFromList = require('../search/getElemFromList');
import {getElemFromList} from '../search/getElemFromList.js';

export class BoxSearch {
    constructor() {
        this.boxSearch = document.createElement('div');
        this.boxSearch.classList.add('box-search');
        this.boxSearch.addEventListener('click', getElemFromList);
        return this.boxSearch;
    }
}