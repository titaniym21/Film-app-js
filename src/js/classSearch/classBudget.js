'use strict';

/** @module classBudget */

/**
 * Module: classBudget~Budget. <br/>
 * The Budget class creates an HTMLElement. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Budget {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.budget = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = `Release date: ${obj.release_date}.`
        this.budget.appendChild(this.p);
        return this.budget;
    }
}

module.exports = { Budget };