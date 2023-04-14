'use strict';

const delFromLocalStorage = require('./delFromLocalStorage');

/** @module functionDel */

/**
 * The delFromMyList function removes an item from the favorite and runs the function <br/>
 * to remove the data from the storage by passing arguments. <br/>
 * The delFromMyList function uses various functions of the delFromLocalStorage module: <br/>
 * [delFromLocalStorage]{@link module:delFromLocalStorage~delFromLocalStorage}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com>
 * @param {object} event - the object where the listener fired
 * @returns {undefined}
 */

function delFromMyList(event) {
    if (event.target.tagName === 'SPAN') {
        let key = `key-${localStorage.getItem('loggedInUsername')}`;
        let id = event.target.parentNode.getAttribute('alt');
        let arr = JSON.parse(localStorage.getItem(key));
        delFromLocalStorage(arr, id, key);
        event.target.parentNode.remove();
    }
}

/**
 * The delModalWindow function closes the movie's modal window: <br/>
 * it removes the parent of the element on which the listener fired <br/>
 * and the background element.
 * @author Stanislav Kuzin <staskuzinman@gmail.com>
 * @param {object} event - the object where the listener fired
 * @returns {undefined}
 */

function delModalWindow(event) { 
    event.target.parentNode.remove();
    body.lastChild.remove();
}

/**
 * The delBoxSearch function closes the window with the search result: <br/>
 * removes the parent of the element on which the listener fired <br/>
 * and returns the main display block.
 * @author Stanislav Kuzin <staskuzinman@gmail.com>
 * @param {object} event - the object where the listener fired
 * @returns {undefined}
 */

function delBoxSearch(event) {
    event.target.parentNode.remove();
    body.children[0].lastElementChild.style.display = 'block';
}

module.exports = {
    delFromMyList,
    delModalWindow,
    delBoxSearch
}