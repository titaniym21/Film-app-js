'use strict';

const { Bg } = require('../classGenres/classBg');
const { BoxSearch } = require('../classGenres/classBoxSearch');
const { Poster } = require('../classGenres/classPoster');
const { Title } = require('../classGenres/classTitle');
const { ButtonClose } = require('../classGenres/classButtonClose');
const { BoxButton } = require('../classGenres/classBoxButton');

// перезаписывает данные в элементах на другие данные из выбранной страницы жанра

function openOtherPage(obj) {
    let collectionBgGenre = bgGenre.children;
    for (let i = 0; i < 20; i += 1) {
        collectionBgGenre[i].firstElementChild.src = `https://image.tmdb.org/t/p/w500${obj[i].poster_path}`;
        collectionBgGenre[i].lastElementChild.textContent = `${obj[i].title}`;
        collectionBgGenre[i].lastElementChild.setAttribute('alt', obj[i].id);
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// открывает первую страницу выбранного жанра

function openFirstPage(obj) {
    let bg = new Bg();
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].poster_path !== null) {
            let boxSearch = new BoxSearch();
            let posterInBox = new Poster(obj[i].poster_path);
            let title = new Title(obj[i]);
            boxSearch.append(posterInBox, title);
            bg.append(boxSearch);
        }
    }
    let buttonClose = new ButtonClose();
    let boxButton = new BoxButton();
    boxButton.children[1].style.backgroundColor = 'black';
    boxButton.children[1].style.scale = '1.1';
    bg.append(buttonClose, boxButton);
    body.append(bg);
    body.children[0].lastElementChild.style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

module.exports = {
    openOtherPage,
    openFirstPage
}