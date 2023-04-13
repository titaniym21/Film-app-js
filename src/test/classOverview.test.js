
const { Overview } = require('../js/classSearch/classOverview');

describe('constructor returns an instance of Overview', () => {
    const obj = { overview : 'This is the best site for selecting movies and cartoons.' };
    const overview = new Overview(obj);
    const p = overview.querySelector('p');

    test('this object is an instance of the HTMLElement class', () => {
        expect(overview).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(overview.tagName).toBe('DIV');
    });

    test('checking the number of elements Overview', () => {
        expect(overview.children).toHaveLength(1);
    });

    test('type checking on an object', () => {
        expect(typeof overview === 'object').toBe(true);
    });

    test('check p not a null', () => {
        expect(p).not.toBeNull();
    });
      
    test('check textcontent p', () => {
        expect(p.textContent).toContain(`${obj.overview}`);
    });
});