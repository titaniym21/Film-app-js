'use strict';

/** @module classContent */

/**
 * Module: classContent~Content. <br/>
 * The Content class creates an HTMLElement.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

export class Content {
    /**
     * Create HTMLElement.
     * @returns {object}
     */
    constructor() {
        this.content = document.createElement('div');
        this.content.classList.add('modal-content');
        return this.content;
    }
}
