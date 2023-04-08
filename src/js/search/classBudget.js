'use strict';

class Budget {
    constructor(obj) {
        this.budget = document.createElement('div');
        this.budget.textContent = `Budget: ${obj.budget}. Release date: ${obj.release_date}.`
        return this.budget;
    }
}

module.exports = { Budget };