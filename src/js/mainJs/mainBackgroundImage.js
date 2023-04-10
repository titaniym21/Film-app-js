const bigPosterImg = require('./requests').bigPosterImg;
//const titlePoster = document.querySelector('.left-side');
const backgroundPoster = document.querySelector('.preview_item');
const previewIitemTitle = document.querySelector('.preview_item_title');
const previewItemOverview = document.querySelector('.preview_item_overview');

async function getRandomFilm(ganresName) {
    let mas = await JSON.parse(localStorage.getItem(ganresName));
    let randomFilm = mas.results [Math.floor(Math.random() * mas.results.length)];
    let posterPath = randomFilm.backdrop_path;
    let title = randomFilm.original_title;
    let overview = randomFilm.overview;
    backgroundPoster.style.backgroundImage = `url(${bigPosterImg() + posterPath})`;
    previewIitemTitle.textContent = title;
    previewItemOverview.textContent = overview;
}

module.exports = getRandomFilm;

