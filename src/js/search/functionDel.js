'use strict';

const delFromLocalStorage = require('./delFromLocalStorage');

function delFromMyList(event) {
    if (event.target.tagName === 'SPAN') {
        let key = localStorage.getItem('loggedInUsername');
        let id = event.target.parentNode.getAttribute('alt');
        let arr = JSON.parse(localStorage.getItem(key));
        delFromLocalStorage(arr, id, key);
        event.target.parentNode.remove();
    }
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