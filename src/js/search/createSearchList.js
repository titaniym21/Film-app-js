'use strict';

const body = document.body;
const { Bg } = require('../classSearch/classBgForList'); 
const { BoxSearch } = require('../classSearch/classBoxSearch'); 
const { PosterInBox } = require('../classSearch/classPosterInBoxSearch');
const { TitleInBox } = require('../classSearch/classTitleInBoxSearch');
const { ButtonCloseSearch } = require('../classSearch/classButtonCloseSearch');

// создает элемент с результатом поиска

function createSearchList(obj) {
    let bg = new Bg();
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].poster_path !== null) {
            let boxSearch = new BoxSearch();
            let posterInBox = new PosterInBox(obj[i]);
            let title = new TitleInBox(obj[i],i);
            boxSearch.append(posterInBox, title);
            bg.append(boxSearch);
        }
    }
    let buttonClose = new ButtonCloseSearch();
    bg.append(buttonClose);
    body.append(bg);
    body.children[0].lastElementChild.style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    if (bg.children.length === 1) {
        bg.remove();
        searchInput.value = '';
        searchInput.placeholder = 'Result not found...';
        body.children[0].lastElementChild.style.display = 'block';
    }
}

module.exports = createSearchList;