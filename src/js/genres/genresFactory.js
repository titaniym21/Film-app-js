'use strict';
const getInfoForList = require('./getInfoForList');
let genre;

// функция сохраняет актуальный жанр

function saveGenres(arg) {
    genre = arg;
}

// передает жанр и страницу которую хотим запросить

function genresFactory(page = 1) {
    if (genre === 'Action') {
        getInfoForList(page, 28)
    } else if (genre === 'Animation') {
        getInfoForList(page, 16)
    } else if (genre === 'Documentary') {
        getInfoForList(page, 99)
    } else if (genre === 'Music') {
        getInfoForList(page, 10402)
    } else if (genre === 'Mystery') {
        getInfoForList(page, 9648)
    } else if (genre === 'History') {
        getInfoForList(page, 36)
    } else if (genre === 'Thriller') {
        getInfoForList(page, 53)
    } else if (genre === 'War') {
        getInfoForList(page, 10752)
    } else if (genre === 'Western') {
        getInfoForList(page, 37)
    } else if (genre === 'Adventure') {
        getInfoForList(page, 12)
    } else if (genre === 'Comedy') {
        getInfoForList(page, 35)
    } else if (genre === 'Crime') {
        getInfoForList(page, 80)
    } else if (genre === 'Drama') {
        getInfoForList(page, 18)
    } else if (genre === 'Family') {
        getInfoForList(page, 10751)
    } else if (genre === 'Fantasy') {
        getInfoForList(page, 14)
    } else if (genre === 'Horror') {
        getInfoForList(page, 27)
    } else if (genre === 'Romance') {
        getInfoForList(page, 10749)
    } else if (genre === 'Science Fiction') {
        getInfoForList(page, 878)
    } else if (genre === 'TV series') {
        getInfoForList(page, 10770)
    } 
}

module.exports = {
    genresFactory,
    saveGenres
};


