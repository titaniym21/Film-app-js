'use strict';

class Content {
    constructor() {
        this.content = document.createElement('div');
        this.content.classList.add('modal-content');
        return this.content;
    }
}

module.exports = { Content };