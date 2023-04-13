
const { ModalWindow } = require('../js/classSearch/classModalWindow');

describe('constructor returns an instance of ModalWindow', () => {
    const modalWindow = new ModalWindow();

    test('this object is an instance of the HTMLElement class', () => {
        expect(modalWindow).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(modalWindow.tagName).toBe('SECTION');
    });
      
    test('check class', () => {
        expect(modalWindow.classList.contains('modal-win')).toBe(true);
    });

    test('type checking on an object', () => {
        expect(typeof modalWindow === 'object').toBe(true);
    });
});