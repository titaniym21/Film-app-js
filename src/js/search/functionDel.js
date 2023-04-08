'use strict';

function delFromLocalStorage(arr, id, key) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i][1] === Number(id)) {
            arr.splice(i, 1);
            localStorage.setItem(key, JSON.stringify(arr));
            return;
        }
    }
}

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