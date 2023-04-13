
const createSliderHtml = require('../js/mainJs/createSliderHtml');

describe('function returns sliderHtml element', () => {
    const key = '123';
    const sliderHtml = createSliderHtml(key);
    const sliderHtmlTitle = sliderHtml.querySelector('h2');
    const sliderHtmlSlider = sliderHtml.querySelector('div');
    const sliderHtmlItem = sliderHtml.getElementsByClassName('item_slider');

    test('this object is an instance of the HTMLElement class', () => {
        expect(sliderHtml).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(sliderHtml.tagName).toBe('DIV');
    });

    test('type checking on an object', () => {
        expect(typeof sliderHtml === 'object').toBe(true);
    });

    test('check class sliderHtml', () => {
        expect(sliderHtml.classList.contains('content-area')).toBe(true);
    });

    test('checking the number of elements sliderHtml', () => {
        expect(sliderHtml.children).toHaveLength(2);
    });

    test('check class sliderHtmlTitle', () => {
        expect(sliderHtmlTitle.classList.contains('arrow_slider_title')).toBe(true);
    });

    test('check innerHTML sliderHtmlTitle', () => {
        expect(sliderHtmlTitle.innerHTML).toContain(`<h2>${key}</h2>`);
    });

    test('check class sliderHtmlSlider', () => {
        expect(sliderHtmlSlider.classList.contains('arrow_slider')).toBe(true);
    });

    test('check class sliderHtmlItem', () => {
        expect(sliderHtmlItem[0].classList.contains(`${key}_item`)).toBe(true);
    });

    test('check element sliderHtmlItem', () => {
        expect(sliderHtmlItem[0].tagName).toBe('DIV');
    });
});