'use strict';

class ProductionCompanies {
    constructor(obj) {
        this.productionCompanies = document.createElement('div');
        this.productionCompanies.textContent = getProductionCompanies(obj.production_companies);
        return this.productionCompanies;
    }
}

module.exports = { ProductionCompanies };