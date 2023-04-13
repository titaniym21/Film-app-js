
const { ButtonRight } = require('../js/classGenres/classButtonRight');

describe('constructor returns an instance of ButtonRight', () => {
    const buttonRight = new ButtonRight();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonRight).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonRight.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(buttonRight.classList.contains('page-buttons')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof buttonRight === 'object').toBe(true);
    });

    test('check textcontent', () => {
        expect(buttonRight.textContent).toContain('>');
    });
});