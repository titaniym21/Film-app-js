'use strict';
import {delFromLocalStorage} from './delFromLocalStorage.js';
const body = document.body;
export function delFromMyList(event) {
    if (event.target.tagName === 'SPAN') {
        let key = `key-${localStorage.getItem('loggedInUsername')}`;
        let id = event.target.parentNode.getAttribute('alt');
        let arr = JSON.parse(localStorage.getItem(key));
        delFromLocalStorage(arr, id, key);
        event.target.parentNode.remove();
    }
}
export function delModalWindow(event) { 
    event.target.parentNode.remove();
    body.lastChild.remove();
}
export function delBoxSearch(event) {
    event.target.parentNode.remove();
    body.children[0].lastElementChild.style.display = 'block';
}
