
const getElemFromList = require('../search/getElemFromList');

class BoxSearch {
    public boxSearch: HTMLDivElement;

    constructor() {
        this.boxSearch = document.createElement('div');
        this.boxSearch.classList.add('box-search');
        this.boxSearch.addEventListener('click', getElemFromList);
        return this;
    }
}

module.exports = { BoxSearch };