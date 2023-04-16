'use strict'

const modalFromMyList = require('./modalFromMyList');
const { delFromMyList } = require('./functionDel');

/** @module addFilmToList */

/** 
 * The addFilmToList function creates an element and adds it to the dropdown list of favorites.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {object} - movie object where there is a title and id field
 * @returns {undefined}
 */

function addFilmToList(obj) { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
    liInMyList.classList.add('list_width');
    liInMyList.addEventListener('click', modalFromMyList);
    liInMyList.textContent = obj.title;
    liInMyList.setAttribute('alt', obj.id);
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('button-close-li');
    buttonClose.addEventListener('click', delFromMyList);
    liInMyList.append(buttonClose);
    listMy.append(liInMyList);
}

module.exports = addFilmToList;