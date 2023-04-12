'use strict';

class Budget {
    constructor(obj) {
        this.budget = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = `Release date: ${obj.release_date}.`
        this.budget.appendChild(this.p);
        return this.budget;
    }
}

module.exports = { Budget };