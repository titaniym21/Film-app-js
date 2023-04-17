// 'use strict';
import {addFilmToList} from '../search/addFilmToList.js';
//const addFilmToList = require('../search/addFilmToList');
let key = `key-${localStorage.getItem('loggedInUsername')}`;

export function addFilmToFavoritesMain(obj) {
    let arr = [];
    if (localStorage.getItem(key) === null){
        arr.push(obj);
        localStorage.setItem(key, JSON.stringify(arr));
    }
    else {
        arr = JSON.parse(localStorage.getItem(key));
        if (arr.some((item) => item.id === obj.id)) {
        } else {
            addFilmToList(obj);
            arr.push(obj);
            localStorage.setItem(key, JSON.stringify(arr));
        }
        console.log(arr);
    }
}