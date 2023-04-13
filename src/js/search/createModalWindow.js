'use strict';

let arrWindow = [];

const { ModalWindow } = require('../classSearch/classModalWindow');
const { Poster } = require('../classSearch/classPoster');
const { Content } = require('../classSearch/classContent');
const { ButtonClose } = require('../classSearch/classButtonClose');
const { ButtonAdd } = require('../classSearch/classButtonAdd');
const { Title } = require('../classSearch/classTitle');
const { Video } = require('../classSearch/classVideo');
const { Overview } = require('../classSearch/classOverview');
const { Genres } = require('../classSearch/classGenres');
const { ProductionCompanies } = require('../classSearch/classProductionCompanies');
const { Budget } = require('../classSearch/classBudget');

// класс создает объект модального окна из поиска или жанров(с кнопокой +)

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

