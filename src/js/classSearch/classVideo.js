'use strict';

class Video {
    constructor(obj) {
        this.video = document.createElement('iframe');
        this.video.src = `https://www.youtube.com/embed/${getTrailer(obj.videos.results)}`;
        this.video.setAttribute("allowfullscreen", "true");
        console.log(obj.videos.results);
        return this.video;
    }
}

module.exports = { Video };