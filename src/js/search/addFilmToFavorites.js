'use strict';

const modalFromMyList = require('./modalFromMyList');
let key = localStorage.getItem('loggedInUsername');

function addFilm(title) { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
    liInMyList.addEventListener('click', modalFromMyList);
    liInMyList.textContent = title[0];
    liInMyList.setAttribute('alt', title[1]);
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('button-close-li');
    buttonClose.addEventListener('click', delFromMyList);
    liInMyList.append(buttonClose);
    listMy.append(liInMyList);
}

function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
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
    let arr = JSON.parse(localStorage.getItem(key));
    addFilm(arr[arr.length - 1]);
}

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