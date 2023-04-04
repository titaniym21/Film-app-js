'use strict';

class Title {
    constructor(title) {
        this.title = document.createElement('h2');
        this.title.classList.add('title-in-box');
        this.title.textContent = `${title}`;
        return this.title;
    }
}

module.exports = { Title };