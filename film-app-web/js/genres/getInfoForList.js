"use strict";

import { API_KEY } from '../mainJs/requests.js';
//const { API_KEY } = require('../mainJs/requests');
import { openOtherPage } from './openPage.js';
//const { openOtherPage } = require('./openPage');
import {changesBoxButton} from './changesBoxButton.js';
//const { openFirstPage } = require('./openPage');
import { openFirstPage } from './openPage.js';
//const changesBoxButton = require('./changesBoxButton');

const body = document.body;
export function getInfoForList(page, genreId) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    if (body.lastElementChild.classList.contains('bg2') === false) {
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openFirstPage(obj.results))
            .catch((error) => console.log(error));
    }
    else {
        changesBoxButton(page);
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openOtherPage(obj.results))
            .catch((error) => console.log(error));
    }
}

