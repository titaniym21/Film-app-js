'use strict';

class ModalWindow {
    constructor() {
        this.modalWindow = document.createElement('section');
        this.modalWindow.classList.add('modal-win');
        return this.modalWindow;
    }
}

module.exports = { ModalWindow };