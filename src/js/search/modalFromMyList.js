'use strict';

const { ModalWindow } = require('../classSearch/classModalWindow');
const { Poster } = require('../classSearch/classPoster');
const { Content } = require('../classSearch/classContent');
const { ButtonClose } = require('../classSearch/classButtonClose');
const { Title } = require('../classSearch/classTitle');
const { Video } = require('../classSearch/classVideo');
const { Overview } = require('../classSearch/classOverview');
const { Genres } = require('../classSearch/classGenres');
const { ProductionCompanies } = require('../classSearch/classProductionCompanies');
const { Budget } = require('../classSearch/classBudget');
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
    if (event.target.tagName === 'LI') {
        event.target.parentNode.classList.add("closeAnimHetflix");
        event.target.parentNode.classList.remove("animHetflix");
        let id = event.target.getAttribute('alt');
        searchById(id);
    }
}

module.exports = modalFromMyList;