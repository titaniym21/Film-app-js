const backgroundPoster = document.querySelector('.preview_item');
const previewIitemTitle = document.querySelector('.preview_item_title');
const previewItemOverview = document.querySelector('.preview_item_overview');
const previewItemPlay = document.querySelector('.title-watch-btn');
const previewItemAdd = document.querySelector('.main .add');
import {searchById} from '../search/searchById.js';
//const searchById = require('../search/searchById');
import {addFilmToFavoritesMain} from './addFilmToFavoritesMain.js';
//const addFilmToFavoritesMain = require('./addFilmToFavoritesMain');

export async function getRandomFilm(ganresName) {
    try {
        let mas = await JSON.parse(localStorage.getItem(ganresName));
        let randomFilm = mas.results [Math.floor(Math.random() * mas.results.length)];
        if (randomFilm.backdrop_path === null) {
            randomFilm = mas.results [Math.floor(Math.random() * mas.results.length)];
        }
        let posterPath = randomFilm.backdrop_path;
        let title = randomFilm.original_title;
        let overview = randomFilm.overview;
        let id = randomFilm.id;
        let obj = {title: title, id: id};
        backgroundPoster.style.backgroundImage = `url( https://image.tmdb.org/t/p/original//${posterPath})`;
        previewIitemTitle.textContent = title;
        previewItemOverview.textContent = overview;
        previewItemPlay.addEventListener('click', () => {
            searchById(id, 'video');
        });
        previewItemAdd.addEventListener('click', () => {
                addFilmToFavoritesMain(obj);
            }
        );
    } catch (error) {
        console.log(error);
    }
}


