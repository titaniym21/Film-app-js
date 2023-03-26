'use strict';

const addFilmToFavorites = require('./addFilmToFavorites');
let arrWindow = [];

class CreateModalWindow {
    constructor(obj) {
        this.name = obj.original_title;
        this.id = obj.id;
        this.modalWindow = document.createElement('section');
        this.modalWindow.classList.add('modal-win');
        this.poster = document.createElement('img');
        this.poster.classList.add('poster');
        this.poster.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        this.content = document.createElement('div');
        this.content.classList.add('modal-content');
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('button-close');
        this.buttonClose.addEventListener('click', delModalWindow);
        this.buttonAdd = document.createElement('div');
        this.buttonAdd.classList.add('button-add');
        this.buttonAdd.addEventListener('click', addFilmToFavorites);
        this.title = document.createElement('h2');
        this.title.textContent = `${obj.original_title}`;
        this.video = document.createElement('iframe');
        this.video.src = `https://www.youtube.com/embed/${getTrailer(obj.videos.results)}`;
        this.overview = document.createElement('div');
        this.overview.textContent = `${obj.overview}`;
        this.genres = document.createElement('div');
        this.genres.textContent = getGenres(obj.genres);
        this.productionCompanies = document.createElement('div');
        this.productionCompanies = getProductionCompanies(obj.production_companies);
        this.budget = document.createElement('div');
        this.budget.textContent = `Budget: ${obj.budget}. Release date: ${obj.release_date}.`
        this.content.append(this.title, this.video, this.overview, this.genres, this.productionCompanies, this.budget);
        this.modalWindow.append(this.poster, this.content, this.buttonClose, this.buttonAdd);
        arrWindow.push(this);
        return this.modalWindow;
    }
}

module.exports = {
    CreateModalWindow,
    arrWindow
}

