
const { Budget } = require('../js/classSearch/classBudget');

describe('constructor returns an instance of Budget', () => {
    const obj = { release_date: "2001-05-18" };
    const budget = new Budget(obj);
    const p = budget.querySelector('p');

    test('this object is an instance of the HTMLElement class', () => {
        expect(budget).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(budget.tagName).toBe('DIV');
    });

    test('checking the number of elements budget', () => {
        expect(budget.children).toHaveLength(1);
    });

    test('type checking on an object', () => {
        expect(typeof budget === 'object').toBe(true);
    });

    test('check p not a null', () => {
        expect(p).not.toBeNull();
    });
      
    test('check textcontent p', () => {
        expect(p.textContent).toContain('Release date: 2001-05-18.');
    });
});