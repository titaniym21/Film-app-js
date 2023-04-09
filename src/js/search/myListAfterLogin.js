'use strict'

const addFilmToList = require('./addFilmToList');
let key = localStorage.getItem('loggedInUsername');

function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
    for (let i = 0; i < arr.length; i += 1) {
        addFilmToList(arr[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem(key) !== null) {
        nameUser.textContent = key;
        myListAfterLogin();
    }
});

function addLastElemList() {
    let arr = JSON.parse(localStorage.getItem(key));
    addFilmToList(arr[arr.length - 1]);
}

module.exports = addLastElemList;