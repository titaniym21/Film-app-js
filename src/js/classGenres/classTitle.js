'use strict';

class Title {
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.classList.add('title-in-box');
        this.title.setAttribute('alt', obj.id);
        this.title.textContent = `${obj.title}`;
        return this.title;
    }
}

module.exports = { Title };