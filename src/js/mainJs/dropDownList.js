'use strict';

const genreListener = require('../genres/genreListener');

const listFilm = document.getElementById('listFilm');
const listPopular = document.getElementById('listPopular');
const listMy = document.getElementById('listMy');
const tvSeries = document.getElementById('tvseries');

function openCloseList(list) {
    if (list.classList.contains("animHetflix")) {
        list.classList.toggle("closeAnimHetflix");
    } else {
        list.classList.toggle("animHetflix");
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
    }
}

function bodyListener() {
    document.body.addEventListener('click', genreListener)
}

listPopular.addEventListener('click', bodyListener)
listFilm.addEventListener('click', bodyListener)
tvSeries.addEventListener('click', bodyListener)

module.exports = animationDropList;
