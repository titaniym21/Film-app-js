'use strict';

const addLastElemList = require('./myListAfterLogin');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

function addFilmToFavorites() { 
    let film = arrWindow.arrWindow[arrWindow.arrWindow.length - 1];
    if (localStorage.getItem(key) === null) {
        let arr = [film];
        localStorage.setItem(key, JSON.stringify(arr)); 
        addLastElemList();
    } else {
        let arr = JSON.parse(localStorage.getItem(key));
        arr.push(film);
        localStorage.setItem(key, JSON.stringify(arr));
        addLastElemList();
    }
}

module.exports = addFilmToFavorites;
