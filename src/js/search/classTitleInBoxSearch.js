'use strict';

class TitleInBox {
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.classList.add('title-in-box');
        this.title.textContent = `${obj.title}`;
        return this.title;
    }
}

module.exports = { TitleInBox };