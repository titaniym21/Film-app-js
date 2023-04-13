
const { leftArrow } = require('../js/mainJs/dataToHtml');
const { rightArrow } = require('../js/mainJs/dataToHtml');

describe('function returns leftArrow element', () => {
    const key = '123';
    const sliderHtmlLeftArrow = leftArrow(key);

    test('check element', () => {
        expect(sliderHtmlLeftArrow.tagName).toBe('DIV');
    });

    test('type checking on an object', () => {
        expect(typeof sliderHtmlLeftArrow === 'object').toBe(true);
    });

    test('check class sliderHtmlLeftArrow', () => {
        expect(sliderHtmlLeftArrow.classList.contains('left_arrow')).toBe(true);
    });

    test('check class sliderHtmlLeftArrow', () => {
        expect(sliderHtmlLeftArrow.classList.contains('arrow')).toBe(true);
    });

    test('check class sliderHtmlLeftArrow', () => {
        expect(sliderHtmlLeftArrow.classList.contains(`left_arrow_${key}`)).toBe(true);
    });

    test('checking the number of elements sliderHtmlLeftArrow', () => {
        expect(sliderHtmlLeftArrow.children).toHaveLength(1);
    });

    test('check first child', () => {
        expect(sliderHtmlLeftArrow.children[0].tagName).toBe('IMG');
    });
})

describe('function returns rightArrow element', () => {
    const key = '456';
    const sliderHtmlRightArrow = rightArrow(key);

    test('check element', () => {
        expect(sliderHtmlRightArrow.tagName).toBe('DIV');
    });

    test('type checking on an object', () => {
        expect(typeof sliderHtmlRightArrow === 'object').toBe(true);
    });

    test('check class sliderHtmlRightArrow', () => {
        expect(sliderHtmlRightArrow.classList.contains('right_arrow')).toBe(true);
    });

    test('check class sliderHtmlRightArrow', () => {
        expect(sliderHtmlRightArrow.classList.contains('arrow')).toBe(true);
    });

    test('check class sliderHtmlRightArrow', () => {
        expect(sliderHtmlRightArrow.classList.contains(`right_arrow_${key}`)).toBe(true);
    });

    test('checking the number of elements sliderHtmlLeftArrow', () => {
        expect(sliderHtmlRightArrow.children).toHaveLength(1);
    });

    test('check first child', () => {
        expect(sliderHtmlRightArrow.children[0].tagName).toBe('IMG');
    });
})