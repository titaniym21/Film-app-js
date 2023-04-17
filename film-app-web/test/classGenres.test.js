
const { Genres } = require('../js/classSearch/classGenres');

describe('constructor returns an instance of Genres', () => {
    const arrGenres = [
            {id: 35,name: 'Comedy'},
            {id: 18,name: 'Drama'},
            {id: 27,name: 'Horror'}
        ] 
    const obj = { genres : arrGenres };
    const genres = new Genres(obj);
    const p = genres.querySelector('p');

    test('this object is an instance of the HTMLElement class', () => {
        expect(genres).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(genres.tagName).toBe('DIV');
    });

    test('checking the number of elements Genres', () => {
        expect(genres.children).toHaveLength(1);
    });

    test('type checking on an object', () => {
        expect(typeof genres === 'object').toBe(true);
    });

    test('check p not a null', () => {
        expect(p).not.toBeNull();
    });
      
    test('check textcontent p', () => {
        expect(p.textContent).toContain('Genres: Comedy, Drama, Horror.');
    });
});