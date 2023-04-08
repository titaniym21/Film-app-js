'use strict';

let arrWindow = [];

const { ModalWindow } = require('./classModalWindow');
const { Poster } = require('./classPoster');
const { Content } = require('./classContent');
const { ButtonClose } = require('./classButtonClose');
const { ButtonAdd } = require('./classButtonAdd');
const { Title } = require('./classTitle');
const { Video } = require('./classVideo');
const { Overview } = require('./classOverview');
const { Genres } = require('./classGenres');
const { ProductionCompanies } = require('./classProductionCompanies');
const { Budget } = require('./classBudget');

class CreateModalWindow {
    constructor(obj) {
        this.name = { 0 : obj.title, 1 : obj.id };
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
        arrWindow.push(this.name);
        return this.modalWindow;
    }
}

module.exports = {
    CreateModalWindow,
    arrWindow
}

