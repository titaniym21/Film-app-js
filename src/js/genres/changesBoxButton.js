'use strict'

// выделяет выбранную страницу(кнопка)

function changesBoxButton(page) {
    let collection = boxButton.children;
    for (let i = 1; i < 6; i += 1) {
        if (collection[i].textContent === page) {
            collection[i].style.backgroundColor = 'black';
            collection[i].style.scale = '1.1';
        } else {
            collection[i].style.backgroundColor = 'rgb(67, 67, 67)';
            collection[i].style.scale = '1.0';
        }
    }
}

module.exports = changesBoxButton;