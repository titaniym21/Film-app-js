
const { beforeFiveButtons } = require('../js/genres/beforeAfterButtons');
const { afterFiveButtons } = require('../js/genres/beforeAfterButtons');
const { Box } = require('../js/classGenres/classBox');

describe('Box', () => {
    let box = new Box();

    test('this object is an instance of the HTMLElement class', () => {
        expect(box).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(box.tagName).toBe('DIV');
    });

    test('check attribute', () => {
        expect(box.getAttribute('id')).toBe('boxButton');
    });

    test('check class', () => {
        expect(box.classList.contains('box-button')).toBe(true);
    });
});