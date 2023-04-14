'use strict';

const body = document.body;
const { Bg } = require('../classSearch/classBgForList'); 
const { BoxSearch } = require('../classSearch/classBoxSearch'); 
const { PosterInBox } = require('../classSearch/classPosterInBoxSearch');
const { TitleInBox } = require('../classSearch/classTitleInBoxSearch');
const { ButtonCloseSearch } = require('../classSearch/classButtonCloseSearch');

/** @module createSearchList */

/**
 * The createSearchList function creates an HTMLElement with the search result. <br/>
 * The createSearchList function uses various functionality from other modules: <br/>
 * [Bg]{@link module:classBgForList~Bg}, <br/>
 * [BoxSearch]{@link module:classBoxSearch~BoxSearch}, <br/>
 * [PosterInBox]{@link module:classPosterInBoxSearch~PosterInBox}, <br/>
 * [TitleInBox]{@link module:classTitleInBoxSearch~TitleInBox}, <br/>
 * [ButtonCloseSearch]{@link module:classButtonCloseSearch~ButtonCloseSearch}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com>
 * @param {object} obj - the object with search results
 * @returns {undefined}
 */

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