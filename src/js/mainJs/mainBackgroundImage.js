const searchById = require('../search/searchById');
const bigPosterImg = require('./requests').bigPosterImg;
const backgroundPoster = document.querySelector('.preview_item');
const previewIitemTitle = document.querySelector('.preview_item_title');
const previewItemOverview = document.querySelector('.preview_item_overview');
const previewItemPlay = document.querySelector('.title-watch-btn');

async function getRandomFilm(ganresName) {
    let mas = await JSON.parse(localStorage.getItem(ganresName));
    let randomFilm = mas.results [Math.floor(Math.random() * mas.results.length)];
    let posterPath = randomFilm.backdrop_path;
    let title = randomFilm.original_title;
    let overview = randomFilm.overview;
    let id = randomFilm.id;
    backgroundPoster.style.backgroundImage = `url(${bigPosterImg() + posterPath})`;
    previewIitemTitle.textContent = title;
    previewItemOverview.textContent = overview;
    previewItemPlay.setAttribute('id', `${id}`);
    previewItemPlay.addEventListener('click', () => {
        searchById(id, 'video');
    });

}

module.exports = getRandomFilm;

