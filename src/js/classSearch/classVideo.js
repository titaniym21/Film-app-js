'use strict';

const { getTrailer } = require('../search/getData');

/** @module classVideo */

/**
 * The Video class creates an HTMLElement with a YouTube video. <br/>
 * The Video class uses various functions of the getData module: <br/>
 * [getTrailer]{@link module:getData~getTrailer}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 */

class Video {
    /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.video = document.createElement('iframe');
        this.video.src = `https://www.youtube.com/embed/${getTrailer(obj.videos.results)}`;
        this.video.setAttribute("allowfullscreen", "true");
        return this.video;
    }
}

module.exports = { Video };