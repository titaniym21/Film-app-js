'use strict';

const addLastElemList = require('./myListAfterLogin');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

/** @module addFilmToFavorites */

/** 
 * The addFilmToFavorites function adds an element to the array, writes it to the storage, <br/>
 * and calls the add element to favorite function.
 * The addFilmToFavorites function uses various functions of the myListAfterLogin module: <br/>
 * [addLastElemList]{@link module:myListAfterLogin~addLastElemList}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @returns {undefined}
 */

function addFilmToFavorites() { 
    let film = arrWindow.arrWindow[arrWindow.arrWindow.length - 1];
    if (localStorage.getItem(key) === null) {
        let arr = [film];
        localStorage.setItem(key, JSON.stringify(arr)); 
        addLastElemList();
    } else {
        let arr = JSON.parse(localStorage.getItem(key));
        if (arr.some((item) => item.id === film.id)) {
            return;
        } else {
            arr.push(film);
            localStorage.setItem(key, JSON.stringify(arr));
            addLastElemList();
        }
    }
}

module.exports = addFilmToFavorites;
