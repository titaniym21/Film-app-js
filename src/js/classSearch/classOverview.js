'use strict';

class Overview {
    constructor(obj) {
        this.overview = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = `${obj.overview}`;
        this.overview.appendChild(this.p);
        return this.overview;
    }
}

module.exports = { Overview };