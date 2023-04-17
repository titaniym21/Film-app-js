
const { Content } = require('../js/classSearch/classContent');

describe('constructor returns an instance of Content', () => {
    const content = new Content();

    test('this object is an instance of the HTMLElement class', () => {
        expect(content).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(content.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(content.classList.contains('modal-content')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof content === 'object').toBe(true);
    });
});