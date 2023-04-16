'use strict';

const { genresFactory } = require('./genresFactory');
const { saveGenres } = require('./genresFactory');

// вызов фабрики жанра по странице

function genreListener(event) {
    if (event.target.tagName === 'LI') {
        event.target.parentNode.classList.add("closeAnimHetflix");
        event.target.parentNode.classList.remove("animHetflix");
        event.target.parentNode.classList.remove("closeAnimHetflix");
        saveGenres(event.target.textContent);
        genresFactory();
    } else if (event.target.tagName === 'SPAN') {
        genresFactory(event.target.textContent);
    } else if (event.target.textContent === '>') {
        if (boxButton.children[5].textContent === '500') {
            genresFactory(boxButton.children[5].textContent);
        } else {
            genresFactory(boxButton.children[1].textContent);
        }
    } else if (event.target.textContent === '<') {
        if (boxButton.children[5].textContent === '5') {
            genresFactory(boxButton.children[1].textContent);
        } else {
            genresFactory(boxButton.children[5].textContent);
        }
    } else if (event.target.textContent === 'TV series') {
        saveGenres(event.target.textContent);
        genresFactory();
    } else if (event.target.classList.contains('close-box-search')) {
        body.removeEventListener('click', genreListener)
    }
}

module.exports = genreListener;

