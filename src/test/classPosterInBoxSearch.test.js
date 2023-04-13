
const { PosterInBox } = require('../js/classSearch/classPosterInBoxSearch');

describe('constructor returns an instance of PosterInBox', () => {
    const obj = { poster_path : '/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg' };
    const poster = new PosterInBox(obj);

    test('this object is an instance of the HTMLElement class', () => {
        expect(poster).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(poster.tagName).toBe('IMG');
    });

    test('type checking on an object', () => {
        expect(typeof poster === 'object').toBe(true);
    });

    test('check class', () => {
        expect(poster.classList.contains('poster-in-box')).toBe(true);
    });
      
    test('check src', () => {
        expect(poster.src).toContain(`https://image.tmdb.org/t/p/w500${obj.poster_path}`);
    });
});