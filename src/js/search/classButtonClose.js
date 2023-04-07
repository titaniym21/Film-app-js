'use strict';

class ButtonClose {
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('button-close');
        this.buttonClose.addEventListener('click', delModalWindow);
        return this.buttonClose;
    }
}

module.exports = { ButtonClose };