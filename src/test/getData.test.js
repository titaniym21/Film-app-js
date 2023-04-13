
const { getTrailer } = require('../js/search/getData');
const { getGenres } = require('../js/search/getData');
const { getProductionCompanies } = require('../js/search/getData');

describe('the function returns the key to youtube', () => {
    let arrVideo = [
            {type: 'Trailer',key: 'enHYcGQAB9w'},
            {type: 'Clip',key: 'CwXOrWvPBPk'},
            {type: 'Clip',key: 'HobeWN9DnsY'}
        ] 
    
    test('check result', () => {
        expect(getTrailer(arrVideo)).toMatch(/enHYcGQAB9w/);
    });

    test('checks an array for element content', () => {
        expect(arrVideo).toContainEqual({ type: 'Trailer', key: 'enHYcGQAB9w' });
    });

    test('check for undefined', () => {
        expect(getTrailer(arrVideo)).toBeDefined();
    });
});

describe('the function returns a string with genres', () => {
    let arrGenres = [
            {id: 35,name: 'Comedy'},
            {id: 18,name: 'Drama'},
            {id: 27,name: 'Horror'}
        ] 
    
    test('check result', () => {
        expect(getGenres(arrGenres)).toMatch(/Genres: Comedy, Drama, Horror./);
    });

    test('checks an array for element content', () => {
        expect(arrGenres).toContainEqual({id: 18,name: 'Drama'});
    });

    test('check for undefined', () => {
        expect(getGenres(arrGenres)).toBeDefined();
    });
});

describe('the function returns a string with production companies', () => {
    let arrPC = [
            {id: 7,name: "DreamWorks Pictures",origin_country: "US"},
            {id: 520,name: "Pacific Data Images",origin_country: "US"},
            {id: 521,name: "DreamWorks Animation",origin_country: "US"}
        ] 
    
    test('check result', () => {
        expect(getProductionCompanies(arrPC)).toMatch(/Production Companies: DreamWorks Pictures, Pacific Data Images, DreamWorks Animation./);
    });

    test('checks an array for element content', () => {
        expect(arrPC).toContainEqual({id: 521,name: "DreamWorks Animation",origin_country: "US"});
    });

    test('check for undefined', () => {
        expect(getProductionCompanies(arrPC)).toBeDefined();
    });
});