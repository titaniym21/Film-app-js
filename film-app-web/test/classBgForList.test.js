
const { Bg } = require('../js/classSearch/classBgForList');

describe('constructor returns an instance of Bg', () => {
    const bg = new Bg();

    test('this object is an instance of the HTMLElement class', () => {
        expect(bg).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(bg.tagName).toBe('SECTION');
    });
      
    test('check class', () => {
        expect(bg.classList.contains('bg2')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof bg === 'object').toBe(true);
    });
});