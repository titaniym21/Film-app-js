'use strict';

const addFilmToFavorites = require('./addFilmToFavorites');

class ButtonAdd {
    constructor() {
        this.buttonAdd = document.createElement('div');
        this.buttonAdd.classList.add('button-add');
        this.buttonAdd.addEventListener('click', addFilmToFavorites);
        return this.buttonAdd;
    }
}

module.exports = { ButtonAdd };