'use strict';

const listHome = document.getElementById('listHome');
const listFilm = document.getElementById('listFilm');
const listPopular = document.getElementById('listPopular');
const listMy = document.getElementById('listMy');

function openCloseList(list) {
    if (list.classList.contains("animHetflix")) {
        list.classList.toggle("closeAnimHetflix");
    } else {
        list.classList.toggle("animHetflix");
    }
}

function animationDropList(event) {
    switch (event.target.id) {
        case 'tvseries':
            openCloseList(listHome);
            break;
        case 'film':
            openCloseList(listFilm);
            break;
        case 'popular':
            openCloseList(listPopular);
            break;
        case 'my':
            openCloseList(listMy);
            break;
    }
}

module.exports = animationDropList;
