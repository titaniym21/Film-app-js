'use strict';
const getElemFromList = require('../search/getElemFromList');

class BoxSearch {
    constructor() {
        this.boxSearch = document.createElement('div');
        this.boxSearch.classList.add('box-search');
        this.boxSearch.addEventListener('click', getElemFromList);
        return this.boxSearch;
    }
}

module.exports = { BoxSearch };