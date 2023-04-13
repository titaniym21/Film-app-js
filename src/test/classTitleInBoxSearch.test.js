
const { TitleInBox } = require('../js/classSearch/classTitleInBoxSearch');

describe('constructor returns an instance of TitleInBox', () => {
    const obj = { title: 'Shrek', id: 808 };
    const title = new TitleInBox(obj);

    test('this object is an instance of the HTMLElement class', () => {
        expect(title).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(title.tagName).toBe('H2');
    });

    test('type checking on an object', () => {
        expect(typeof title === 'object').toBe(true);
    });

    test('check class', () => {
        expect(title.classList.contains('title-in-box')).toBe(true);
    });

    test('check attribute', () => {
        expect(title.getAttribute('alt')).toContain(`${obj.id}`);
    });

    test('check textcontent', () => {
        expect(title.textContent).toContain(`${obj.title}`);
    });
});