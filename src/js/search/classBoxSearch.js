'use strict';

class BoxSearch {
    constructor() {
        this.boxSearch = document.createElement('div');
        this.boxSearch.classList.add('box-search');
        return this.boxSearch;
    }
}

module.exports = { BoxSearch };