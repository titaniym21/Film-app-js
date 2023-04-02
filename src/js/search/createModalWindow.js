'use strict';

const addFilmToFavorites = require('./addFilmToFavorites');
let arrWindow = [];

class ModalWindow {
    constructor() {
        this.modalWindow = document.createElement('section');
        this.modalWindow.classList.add('modal-win');
        return this.modalWindow;
    }
}

class Poster {
    constructor(obj) {
        this.poster = document.createElement('img');
        this.poster.classList.add('poster');
        this.poster.src = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        return this.poster;
    }
}

class Content {
    constructor() {
        this.content = document.createElement('div');
        this.content.classList.add('modal-content');
        return this.content;
    }
}

class ButtonClose {
    constructor() {
        this.buttonClose = document.createElement('div');
        this.buttonClose.classList.add('button-close');
        this.buttonClose.addEventListener('click', delModalWindow);
        return this.buttonClose;
    }
}

class ButtonAdd {
    constructor() {
        this.buttonAdd = document.createElement('div');
        this.buttonAdd.classList.add('button-add');
        this.buttonAdd.addEventListener('click', addFilmToFavorites);
        return this.buttonAdd;
    }
}

class Title {
    constructor(obj) {
        this.title = document.createElement('h2');
        this.title.textContent = `${obj.original_title}`;
        return this.title;
    }
}

class Video {
    constructor(obj) {
        this.video = document.createElement('iframe');
        this.video.src = `https://www.youtube.com/embed/${getTrailer(obj.videos.results)}`;
        return this.video;
    }
}

class Overview {
    constructor(obj) {
        this.overview = document.createElement('div');
        this.overview.textContent = `${obj.overview}`;
        return this.overview;
    }
}

class Genres {
    constructor(obj) {
        this.genres = document.createElement('div');
        this.genres.textContent = getGenres(obj.genres);
        return this.genres;
    }
}

class ProductionCompanies {
    constructor(obj) {
        this.productionCompanies = document.createElement('div');
        this.productionCompanies = getProductionCompanies(obj.production_companies);
        return this.productionCompanies;
    }
}

class Budget {
    constructor(obj) {
        this.budget = document.createElement('div');
        this.budget.textContent = `Budget: ${obj.budget}. Release date: ${obj.release_date}.`
        return this.budget;
    }
}

class CreateModalWindow {
    constructor(obj) {
        this.name = obj.original_title;
        this.modalWindow = new ModalWindow();
        this.poster = new Poster(obj);
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.buttonAdd = new ButtonAdd();
        this.title = new Title(obj);
        this.video = new Video(obj);
        this.overview = new Overview(obj);
        this.genres = new Genres(obj);
        this.productionCompanies = new ProductionCompanies(obj);
        this.budget = new Budget(obj);
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

