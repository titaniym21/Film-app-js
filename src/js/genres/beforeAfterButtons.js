'use strict';

function beforeFiveButtons() {
    if (boxButton.children[1].textContent === '1') {
        return;
    } else {
        let collection = boxButton.children;
        for (let i = 1; i < 6; i += 1) {
            collection[i].textContent = Number(collection[i].textContent) - 5;
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
        }
    }
}

module.exports = {
    beforeFiveButtons,
    afterFiveButtons
}