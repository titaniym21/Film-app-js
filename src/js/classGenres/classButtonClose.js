'use strict';

class ButtonClose {
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('close-box-search');
        this.buttonClose.addEventListener('click', delBoxSearch);
        return this.buttonClose;
    }
}

module.exports = { ButtonClose };