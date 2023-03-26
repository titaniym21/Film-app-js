'use strict';

function getTrailer(arrVideo) {
    let keyYouTube;
    for (let i = 0; i < arrVideo.length; i += 1) {
        if (arrVideo[i].type === 'Trailer') {
            keyYouTube = arrVideo[i].key;
            break;
        }
    }
    return keyYouTube;
}

function getGenres(arrGenres) {
    let genresInfo = 'Genres: ';
    for (let i = 0; i < arrGenres.length; i += 1) {
        if (i === arrGenres.length - 1) {
            genresInfo += `${arrGenres[i].name}.`;
        } else {
            genresInfo += `${arrGenres[i].name}, `;
        }
    }
    return genresInfo;
}

function getProductionCompanies(arrPC) {
    let pcInfo = 'Production Companies: ';
    for (let i = 0; i < arrPC.length; i += 1) {
        if (i === arrPC.length - 1) {
            pcInfo += `${arrPC[i].name}.`;
        } else {
            pcInfo += `${arrPC[i].name}, `;
        }
    }
    return pcInfo;
}

module.exports = {
    getTrailer,
    getGenres,
    getProductionCompanies
}