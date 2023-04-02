'use strict';

let windowMod;

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
        this.modalWindow.append(this.poster, this.content, this.buttonClose);
        return this.modalWindow;
    }
}

function searchById(id) {
    let search = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => {
            let bg = document.createElement('section');
            bg.classList.add('bg');
            body.append(bg);
            windowMod = new CreateModalWindow(obj);
            body.append(windowMod);
        })
        .catch((error) => console.log(error))
}

function modalFromMyList(event) {
    let listItem = event.target.textContent;
    let search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${listItem}`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => obj.results[0].id) 
        .then((idFilm) => searchById(idFilm))
        .catch((error) => console.log(error))
}

module.exports = modalFromMyList;