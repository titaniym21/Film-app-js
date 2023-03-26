'use strict';

const modalFromMyList = require('./modalFromMyList');

function addFilmToFavorites() { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
    liInMyList.addEventListener('click', modalFromMyList);
    liInMyList.textContent = arrWindow.arrWindow[arrWindow.arrWindow.length - 1].name;
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('button-close-li');
    buttonClose.addEventListener('click', delFromMyList);
    liInMyList.append(buttonClose);
    listMy.append(liInMyList);
}

module.exports = addFilmToFavorites;