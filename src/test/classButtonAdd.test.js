
const { ButtonAdd } = require('../js/classSearch/classButtonAdd');

describe('constructor returns an instance of ButtonAdd', () => {
    const buttonAdd = new ButtonAdd();

    test('this object is an instance of the HTMLElement class', () => {
        expect(buttonAdd).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(buttonAdd.tagName).toBe('DIV');
    });
      
    test('check class', () => {
        expect(buttonAdd.classList.contains('button-add')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof buttonAdd === 'object').toBe(true);
    });
});