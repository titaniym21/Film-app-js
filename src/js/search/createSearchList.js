'use strict';

const body = document.body;
const getElemFromList = require('./getElemFromList');

function createSearchList(obj) {
    let bg = document.createElement('section');
    bg.classList.add('bg2');
    bg.addEventListener('click', getElemFromList);
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].poster_path !== null) {
            let boxSearch = document.createElement('div');
            boxSearch.classList.add('box-search');
            let posterInBox = document.createElement('img');
            posterInBox.classList.add('poster-in-box')
            posterInBox.src = `https://image.tmdb.org/t/p/w500${obj[i].poster_path}`;
            let title = document.createElement('h2');
            title.classList.add('title-in-box');
            title.textContent = `${obj[i].original_title}`;
            boxSearch.append(posterInBox, title);
            bg.append(boxSearch);
        }
    }
    let buttonClose = document.createElement('div');
    buttonClose.classList.add('close-box-search');
    buttonClose.addEventListener('click', delBoxSearch);
    bg.append(buttonClose);
    body.append(bg);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    if (bg.children.length === 1) {
        bg.remove();
        searchInput.value = '';
        searchInput.placeholder = 'Result not found...';
    }
}

module.exports = createSearchList;