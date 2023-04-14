// 'use strict';
const addFilmToList = require('../search/addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

function addFilmToFavoritesMain(obj) {
    let arr = [];
    if (localStorage.getItem(key) === null){
        arr.push(obj);
        console.log('null');
        console.log(arr);
        localStorage.setItem(key, JSON.stringify(arr));
    }
    else {
        arr = JSON.parse(localStorage.getItem(key));
        if (arr.some((item) => item.id === obj.id)) {
            console.log('есть');
        } else {
            addFilmToList(obj);
            arr.push(obj);
            console.log('нет');
            localStorage.setItem(key, JSON.stringify(arr));
        }
        console.log(arr);
    }
}
module.exports = addFilmToFavoritesMain;