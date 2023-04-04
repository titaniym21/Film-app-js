'use strict';

const { genresFactory } = require('./genresFactory');
const { saveGenres } = require('./genresFactory');

function genreListener(event) {
    if (event.target.tagName === 'LI') {
        event.target.parentNode.classList.toggle("closeAnimHetflix");
        saveGenres(event.target.textContent);
        genresFactory();
    } else if (event.target.tagName === 'SPAN') {
        genresFactory(event.target.textContent);
    } else if (event.target.textContent === 'TV series') {
        saveGenres(event.target.textContent);
        genresFactory();
    } else if (event.target.classList.contains('close-box-search')) {
        body.removeEventListener('click', genreListener)
    }
}

module.exports = genreListener;

