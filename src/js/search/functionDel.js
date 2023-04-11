'use strict';

const delFromLocalStorage = require('./delFromLocalStorage');

// считывает пользователя, id элемента который надо удалить и массив всего избранного, передает в функцию на удаление 

function delFromMyList(event) {
    if (event.target.tagName === 'SPAN') {
        let key = `key-${localStorage.getItem('loggedInUsername')}`;
        let id = event.target.parentNode.getAttribute('alt');
        let arr = JSON.parse(localStorage.getItem(key));
        delFromLocalStorage(arr, id, key);
        event.target.parentNode.remove();
    }
}

// закрывает модальное окно

function delModalWindow(event) { 
    event.target.parentNode.remove();
    body.lastChild.remove();
}

// закрывает элемент с результатом поиска

function delBoxSearch(event) {
    event.target.parentNode.remove();
    body.children[0].lastElementChild.style.display = 'block';
}

module.exports = {
    delFromMyList,
    delModalWindow,
    delBoxSearch
}