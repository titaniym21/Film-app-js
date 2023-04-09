'use strict';

class Overview {
    constructor(obj) {
        this.overview = document.createElement('div');
        this.overview.textContent = `${obj.overview}`;
        return this.overview;
    }
}

module.exports = { Overview };