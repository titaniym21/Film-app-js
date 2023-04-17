
const { ProductionCompanies } = require('../js/classSearch/classProductionCompanies');

describe('constructor returns an instance of ProductionCompanies', () => {
    let arrPC = [
            {id: 7,name: "DreamWorks Pictures",origin_country: "US"},
            {id: 520,name: "Pacific Data Images",origin_country: "US"},
            {id: 521,name: "DreamWorks Animation",origin_country: "US"}
        ] 
    const obj = { production_companies : arrPC };
    const productionCompanies = new ProductionCompanies(obj);
    const p = productionCompanies.querySelector('p');

    test('this object is an instance of the HTMLElement class', () => {
        expect(productionCompanies).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(productionCompanies.tagName).toBe('DIV');
    });

    test('checking the number of elements ProductionCompanies', () => {
        expect(productionCompanies.children).toHaveLength(1);
    });

    test('type checking on an object', () => {
        expect(typeof productionCompanies === 'object').toBe(true);
    });

    test('check p not a null', () => {
        expect(p).not.toBeNull();
    });
      
    test('check textcontent p', () => {
        expect(p.textContent).toContain('Production Companies: DreamWorks Pictures, Pacific Data Images, DreamWorks Animation.');
    });
});