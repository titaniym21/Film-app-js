const bigPosterImg = require('./requests').bigPosterImg;

function getRandomFilm(ganresName, backgroundPoster, titlePoster) {
    let mas = JSON.parse(localStorage.getItem(ganresName));
    let randomFilm = mas.results [Math.floor(Math.random() * mas.results.length)];
    let posterPath = randomFilm.backdrop_path;
    let title = randomFilm.name;
    backgroundPoster.style.backgroundImage = `url(${bigPosterImg() + posterPath})`;
    let htmlData = `<h1>${title}</h1>`;
    titlePoster.innerHTML = htmlData;
}

module.exports = getRandomFilm;