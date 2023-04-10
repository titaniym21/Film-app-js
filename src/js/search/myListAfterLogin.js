'use strict'

const addFilmToList = require('./addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

// строит список избранного после авторизации пользователя  

function myListAfterLogin() {
    let arr = JSON.parse(localStorage.getItem(key));
    if (arr !== null) {
        for (let i = 0; i < arr.length; i += 1) {
            addFilmToList(arr[i]);
        }
    }
}

// после загрузки считывает пользователя и вызывает функуцию заполнения избранного

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('loggedInUsername') !== null) {
        let objUser = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUsername')));
        nameUser.textContent = objUser.username;
        myListAfterLogin();
    }
});

// передает последний добавленый элемент в избранное на отрисовку в блоке избранное

function addLastElemList() {
    let arr = JSON.parse(localStorage.getItem(key));
    addFilmToList(arr[arr.length - 1]);
}

module.exports = addLastElemList;