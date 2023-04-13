
const { ButtonCloseSearch } = require('../js/classSearch/classButtonCloseSearch');

describe('constructor returns an instance of ButtonCloseSearch', () => {
    const buttonCloseSearch = new ButtonCloseSearch();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonCloseSearch).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonCloseSearch.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(buttonCloseSearch.classList.contains('close-box-search')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof buttonCloseSearch === 'object').toBe(true);
    });
});