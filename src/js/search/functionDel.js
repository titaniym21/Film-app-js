'use strict';

function delFromMyList(event) { 
    event.target.parentNode.remove();
}

function delModalWindow(event) { 
    event.target.parentNode.remove();
    body.lastChild.remove();
}

function delBoxSearch(event) {
    event.target.parentNode.remove();
    body.children[0].lastElementChild.style.display = 'block';
}

module.exports = {
    delFromMyList,
    delModalWindow,
    delBoxSearch
}