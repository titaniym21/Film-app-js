'use strict'

const modalFromMyList = require('./modalFromMyList');

// функция создает елемент и добавляет его в конец списка избранного

function addFilmToList(title) { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
    liInMyList.addEventListener('click', modalFromMyList);
    liInMyList.textContent = title[0];
    liInMyList.setAttribute('alt', title[1]);
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('button-close-li');
    buttonClose.addEventListener('click', delFromMyList);
    liInMyList.append(buttonClose);
    listMy.append(liInMyList);
}

module.exports = addFilmToList;