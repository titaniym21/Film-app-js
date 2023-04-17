import {initSlider} from './slider.js';
//const initSlider = require('./slider');
import { getHtmlData } from './dataToHtml.js';
//const { getHtmlData } = require('./dataToHtml');
import { Init } from './sizeWindow.js';
//const Init = require('./sizeWindow').Init;
export async function addFilmToMain(genreName, elementSelector, leftArrowSelector, rightArrowSelector, currIndex = 0) {
    let movies = JSON.parse(localStorage.getItem(genreName));
    const element = document.querySelector(elementSelector);
    const data = await getHtmlData(movies.results, genreName);
    element.innerHTML = data;
    const leftArrow = document.querySelector(leftArrowSelector);
    const rightArrow = document.querySelector(rightArrowSelector);
    await initSlider(leftArrow, rightArrow, element, movies, genreName, currIndex);
    Init();
    leftArrow.click();
}


