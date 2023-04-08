'use strict';

const searchById = require('./searchById');

function getElemFromList(event) {
    if (event.target.parentNode.tagName === 'DIV') {
        let id = event.target.parentNode.lastChild.getAttribute('alt');
        searchById(id)
    }
}

module.exports = getElemFromList;