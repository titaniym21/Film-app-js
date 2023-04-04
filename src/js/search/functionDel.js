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
    body.children[1].style.display = 'block';
}

module.exports = {
    delFromMyList,
    delModalWindow,
    delBoxSearch
}