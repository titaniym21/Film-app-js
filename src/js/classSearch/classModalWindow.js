'use strict';

/** @module classModalWindow */

/**
 * Module: classModalWindow~ModalWindow. <br/>
 * The ModalWindow class creates the root HTMLElement for the movie information window.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class ModalWindow {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.modalWindow = document.createElement('section');
        this.modalWindow.classList.add('modal-win');
        return this.modalWindow;
    }
}

module.exports = { ModalWindow };