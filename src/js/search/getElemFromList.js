'use strict';

const searchById = require('./searchById');

// считывает id с элемента в результате поиска на котором сработал слушатель и передает его в функию с запросом

function getElemFromList(event) {
    if (event.target.parentNode.tagName === 'DIV') {
        let id = event.target.parentNode.lastChild.getAttribute('alt');
        searchById(id)
    }
}

module.exports = getElemFromList;