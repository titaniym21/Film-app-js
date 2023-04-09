'use strict'

const addFilmToList = require('./addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
    for (let i = 0; i < arr.length; i += 1) {
        addFilmToList(arr[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem(key) !== null) {
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