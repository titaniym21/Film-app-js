'use strict';

//const addFilmToFavorites = require('../search/addFilmToFavorites');
//import { addFilmToFavorites } from '../search/addFilmToFavorites.js';
export class ButtonAdd {
    constructor() {
        this.buttonAdd = document.createElement('div');
        this.buttonAdd.classList.add('button-add');
        //this.buttonAdd.addEventListener('click', addFilmToFavorites);
        return this.buttonAdd;
    }
}