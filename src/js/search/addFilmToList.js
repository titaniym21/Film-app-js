'use strict'

const modalFromMyList = require('./modalFromMyList');
const { delFromMyList } = require('./functionDel');

// функция создает елемент и добавляет его в конец списка избранного

function addFilmToList(obj) { 
    let listMy = document.getElementById('listMy');
    let liInMyList = document.createElement('li');
    liInMyList.classList.add('in_Hetflix');
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