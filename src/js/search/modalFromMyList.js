'use strict';

const { ModalWindow } = require('./classModalWindow');
const { Poster } = require('./classPoster');
const { Content } = require('./classContent');
const { ButtonClose } = require('./classButtonClose');
const { Title } = require('./classTitle');
const { Video } = require('./classVideo');
const { Overview } = require('./classOverview');
const { Genres } = require('./classGenres');
const { ProductionCompanies } = require('./classProductionCompanies');
const { Budget } = require('./classBudget');
let windowMod;

class CreateModalWindow {
    constructor(obj) {
        this.modalWindow = new ModalWindow();
        this.poster = new Poster(obj);
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.title = new Title(obj);
        this.video = new Video(obj);
        this.overview = new Overview(obj);
        this.genres = new Genres(obj);
        this.productionCompanies = new ProductionCompanies(obj);
        this.budget = new Budget(obj);
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
    event.target.parentNode.classList.toggle("closeAnimHetflix");
    let listItem = event.target.textContent;
    let search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${listItem}`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => obj.results[0].id) 
        .then((idFilm) => searchById(idFilm))
        .catch((error) => console.log(error))
}

module.exports = modalFromMyList;