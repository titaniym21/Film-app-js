'use strict';

function beforeFiveButtons() {
    if (boxButton.children[1].textContent === '1') {
        return;
    } else {
        let collection = boxButton.children;
        for (let i = 1; i < 6; i += 1) {
            collection[i].textContent = Number(collection[i].textContent) - 5;
            collection[i].style.backgroundColor = 'rgb(67, 67, 67)';
            collection[i].style.scale = '1.0';
        }
    }
}

function afterFiveButtons() {
    if (boxButton.children[5].textContent === '500') {
        return;
    } else {
        let collection = boxButton.children;
        for (let i = 1; i < 6; i += 1) {
            collection[i].textContent = Number(collection[i].textContent) + 5;
            collection[i].style.backgroundColor = 'rgb(67, 67, 67)';
            collection[i].style.scale = '1.0';
        }
    }
}

module.exports = {
    beforeFiveButtons,
    afterFiveButtons
}