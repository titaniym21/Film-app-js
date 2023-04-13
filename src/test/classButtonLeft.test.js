
const { ButtonLeft } = require('../js/classGenres/classButtonLeft');

describe('constructor returns an instance of ButtonLeft', () => {
    const buttonLeft = new ButtonLeft();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonLeft).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonLeft.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(buttonLeft.classList.contains('page-buttons')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof buttonLeft === 'object').toBe(true);
    });

    test('check textcontent', () => {
        expect(buttonLeft.textContent).toContain('<');
    });
});