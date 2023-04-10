'use strict'

const addFilmToList = require('./addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
    if (arr !== null) {
        for (let i = 0; i < arr.length; i += 1) {
            addFilmToList(arr[i]);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('loggedInUsername') !== null) {
        let objUser = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUsername')));
        nameUser.textContent = objUser.username;
        myListAfterLogin();
    }
});

function addLastElemList() {
    let arr = JSON.parse(localStorage.getItem(key));
    addFilmToList(arr[arr.length - 1]);
}

module.exports = addLastElemList;