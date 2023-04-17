
const { ButtonClose } = require('../js/classGenres/classButtonClose');

describe('constructor returns an instance of ButtonClose', () => {
    const buttonClose = new ButtonClose();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonClose).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonClose.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(buttonClose.classList.contains('close-box-search')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof buttonClose === 'object').toBe(true);
    });
});