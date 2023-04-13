
const { Video } = require('../js/classSearch/classVideo');

describe('constructor returns an instance of Video', () => {
    let arrVideo = [
            {type: 'Trailer',key: 'enHYcGQAB9w'},
            {type: 'Clip',key: 'CwXOrWvPBPk'},
            {type: 'Clip',key: 'HobeWN9DnsY'}
        ] 
    const obj = { videos : { results: arrVideo} };
    const video = new Video(obj);

    test('this object is an instance of the HTMLElement class', () => {
        expect(video).toBeInstanceOf(HTMLElement);
    });

    test('check element', () => {
        expect(video.tagName).toBe('IFRAME');
    });

    test('type checking on an object', () => {
        expect(typeof video === 'object').toBe(true);
    });

    test('check attribute', () => {
        expect(video.getAttribute('allowfullscreen')).toContain('true');
    });

    test('check src', () => {
        expect(video.src).toContain(`https://www.youtube.com/embed/enHYcGQAB9w`);
    });
});