
const { BoxButton } = require('../js/classGenres/classBoxButton');

describe('constructor returns an instance of boxButton', () => {
    const boxButton = new BoxButton();

    test('this object is an instance of the HTMLElement class', () => {
        expect(boxButton).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(boxButton.tagName).toBe('DIV');
    });

    test('type checking on an object', () => {
        expect(typeof boxButton === 'object').toBe(true);
    });
      
    test('checking the number of elements BoxButton', () => {
        expect(boxButton.children).toHaveLength(7);
    });

    test('check first child', () => {
        expect(boxButton.children[0].tagName).toBe('DIV');
    });

    test('check last child', () => {
        expect(boxButton.children[6].tagName).toBe('DIV');
    });
});