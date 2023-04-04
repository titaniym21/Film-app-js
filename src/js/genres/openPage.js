'use strict';

const { Bg } = require('./classBg');
const { BoxSearch } = require('./classBoxSearch');
const { Poster } = require('./classPoster');
const { Title } = require('./classTitle');
const { ButtonClose } = require('./classButtonClose');
const { BoxButton } = require('./classBoxButton');

function openOtherPage(obj) {
    let collectionBgGenre = bgGenre.children;
    for (let i = 0; i < 20; i += 1) {
        collectionBgGenre[i].firstElementChild.src = `https://image.tmdb.org/t/p/w500${obj[i].poster_path}`;
        collectionBgGenre[i].lastElementChild.textContent = `${obj[i].title}`;
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openFirstPage(obj) {
    let bg = new Bg();
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].poster_path !== null) {
            let boxSearch = new BoxSearch();
            let posterInBox = new Poster(obj[i].poster_path);
            let title = new Title(obj[i].title);
            boxSearch.append(posterInBox, title);
            bg.append(boxSearch);
        }
    }
    let buttonClose = new ButtonClose();
    let boxButton = new BoxButton();
    bg.append(buttonClose, boxButton);
    body.append(bg);
}

module.exports = {
    openOtherPage,
    openFirstPage
}