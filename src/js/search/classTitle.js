'use strict';

class Title {
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.textContent = `${obj.title}`;
        return this.title;
    }
}

module.exports = { Title };