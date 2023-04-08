'use strict';

const modalFromMyList = require('./modalFromMyList');
let arr = [];
let key = localStorage.getItem('loggedInUsername');

function addFilm(title) { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
    liInMyList.addEventListener('click', modalFromMyList);
    liInMyList.textContent = title;
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('button-close-li');
    liInMyList.append(buttonClose);
    listMy.append(liInMyList);
}

function myListAfterLogin() {
    arr = JSON.parse(localStorage.getItem(key));
    for (let i = 0; i < arr.length; i += 1) {
        addFilm(arr[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem(key) !== null) {
        myListAfterLogin();
    }
});

function addLastElemList() {
    arr = JSON.parse(localStorage.getItem(key));
    addFilm(arr[arr.length - 1]);
}

function addFilmToFavorites() { 
    let title = arrWindow.arrWindow[arrWindow.arrWindow.length - 1];
    if (localStorage.getItem(key) === null) {
        let arr = [title];
        localStorage.setItem(key, JSON.stringify(arr)); 
        addLastElemList();
    } else {
        arr = JSON.parse(localStorage.getItem(key));
        arr.push(title);
        localStorage.setItem(key, JSON.stringify(arr));
        addLastElemList();
    }
}

module.exports = addFilmToFavorites;