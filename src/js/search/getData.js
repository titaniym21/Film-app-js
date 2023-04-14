"use strict";

/** @module getData */

/** 
 * Module: getData~getTrailer. <br/>
 * The getTrailer function takes an array of objects, iterates through the array <br/>
 * and looks for the type: 'Trailer' field, if true, returns the key field of this object.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {Array} arrVideo - array of objects with video information
 * @returns {string} - key to youtube video
 */

function getTrailer(arrVideo) {
    let keyYouTube = '';
    for (let i = 0; i < arrVideo.length; i += 1) {
        if (arrVideo[i].type === 'Trailer') {
            keyYouTube = arrVideo[i].key;
            break;
        }
    }
    return keyYouTube;
}

/** 
 * Module: getData~getGenres. <br/>
 * The getGenres function takes an array of objects, iterates over it <br/>
 * and writes the value of the name field into one line.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {Array} arrGenres - array of objects with genres information
 * @returns {string} - string of all listed genres
 */

function getGenres(arrGenres) {
    let genresInfo = 'Genres: ';
    for (let i = 0; i < arrGenres.length; i += 1) {
        if (i === arrGenres.length - 1) {
            genresInfo += `${arrGenres[i].name}.`;
        }
        else {
            genresInfo += `${arrGenres[i].name}, `;
        }
    }
    return genresInfo;
}

/** 
 * Module: getData~getProductionCompanies. <br/>
 * The getProductionCompanies function takes an array of objects, iterates over it <br/>
 * and writes the value of the name field into one line.
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {Array} arrGenres - array of objects with genres information
 * @returns {string} - string of all listed genres
 */

function getProductionCompanies(arrPC) {
    let pcInfo = 'Production Companies: ';
    for (let i = 0; i < arrPC.length; i += 1) {
        if (i === arrPC.length - 1) {
            pcInfo += `${arrPC[i].name}.`;
        }
        else {
            pcInfo += `${arrPC[i].name}, `;
        }
    }
    return pcInfo;
}
module.exports = {
    getTrailer,
    getGenres,
    getProductionCompanies
};
