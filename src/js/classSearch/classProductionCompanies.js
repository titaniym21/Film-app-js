'use strict';

class ProductionCompanies {
    constructor(obj) {
        this.productionCompanies = document.createElement('div');
        this.p = document.createElement('p');
        this.p.textContent = getProductionCompanies(obj.production_companies);
        this.productionCompanies.appendChild(this.p);
        return this.productionCompanies;
    }
}

module.exports = { ProductionCompanies };