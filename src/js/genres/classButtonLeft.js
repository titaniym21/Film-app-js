'use strict';

class ButtonLeft {
    constructor() {
        this.buttonLeft = document.createElement('div');
        this.buttonLeft.classList.add('page-buttons');
        this.buttonLeft.textContent = '<';
        return this.buttonLeft;
    }
}

module.exports = { ButtonLeft };