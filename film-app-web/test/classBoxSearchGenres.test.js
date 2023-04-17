
const { BoxSearch } = require('../js/classGenres/classBoxSearch');

describe('constructor returns an instance of BoxSearch', () => {
    const boxSearch = new BoxSearch();

    test('this object is an instance of the HTMLElement class', () => {
        expect(boxSearch).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(boxSearch.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(boxSearch.classList.contains('box-search')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof boxSearch === 'object').toBe(true);
    });
});