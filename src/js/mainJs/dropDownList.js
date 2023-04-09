'use strict';

const genreListener = require('../genres/genreListener');

const listFilm = document.getElementById('listFilm');
const listPopular = document.getElementById('listPopular');
const listMy = document.getElementById('listMy');
const tvSeries = document.getElementById('tvseries');
let arrList = [listFilm, listPopular, listMy];

function closeAllList() {
    for (let i = 0; i < arrList.length; i += 1) {
        if (arrList[i].classList.contains("animHetflix")) {
            arrList[i].classList.add("closeAnimHetflix");
            arrList[i].classList.remove("animHetflix");
        }
    }
}

function openCloseList(list) {
    if (list.classList.contains("animHetflix")) {
        closeAllList();
        list.classList.add("closeAnimHetflix");
        list.classList.remove("animHetflix");
    } else if (list.classList.contains("closeAnimHetflix")) {
        closeAllList();
        list.classList.add("animHetflix");
        list.classList.remove("closeAnimHetflix");
    } else {
        closeAllList();
        list.classList.add("animHetflix");
    }  
}

function animationDropList(event) {
    switch (event.target.id) {
        case 'film':
            openCloseList(listFilm);
            break;
        case 'popular':
            openCloseList(listPopular);
            break;
        case 'my':
            openCloseList(listMy);
            break;
        case 'tvseries':
            closeAllList();
            break;
    }
}

function bodyListener() {
    document.body.addEventListener('click', genreListener)
}

listPopular.addEventListener('click', bodyListener)
listFilm.addEventListener('click', bodyListener)
tvSeries.addEventListener('click', bodyListener)

module.exports = animationDropList;
