
const { ButtonNumber } = require('../js/classGenres/classButtonNumber');

describe('ButtonNumber', () => {
    let buttonNumber = new ButtonNumber();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonNumber).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonNumber.tagName).toBe('SPAN');
    });

    test('check class', () => {
        expect(buttonNumber.classList.contains('page-buttons')).toBe(true);
    });
});