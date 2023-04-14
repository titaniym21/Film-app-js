'use strict';

const { getProductionCompanies } = require('../search/getData');

/** @module classProductionCompanies */

/**
 * The ProductionCompanies class creates an HTMLElement. <br/>
 * The ProductionCompanies class uses various functions of the getData module: <br/>
 * [getProductionCompanies]{@link module:getData~getProductionCompanies}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class ProductionCompanies {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.productionCompanies = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = getProductionCompanies(obj.production_companies);
        this.productionCompanies.appendChild(this.p);
        return this.productionCompanies;
    }
}

module.exports = { ProductionCompanies };