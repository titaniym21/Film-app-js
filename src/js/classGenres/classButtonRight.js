'use strict';

class ButtonRight {
    constructor() {
        this.buttonRight = document.createElement('div');
        this.buttonRight.classList.add('page-buttons');
        this.buttonRight.textContent = '>';
        return this.buttonRight;
    }
}

module.exports = { ButtonRight };