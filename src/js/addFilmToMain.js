const initSlider = require('../js/slider');
const getHtmlData = require('../js/dataToHtml');

async function addFilmToMain(genreName, elementSelector, leftArrowSelector, rightArrowSelector) {
    let movies = JSON.parse(localStorage.getItem(genreName));
    const element = document.querySelector(elementSelector);
    const leftArrow = document.querySelector(leftArrowSelector);
    const rightArrow = document.querySelector(rightArrowSelector);
    const data = await getHtmlData(movies.results);
    element.innerHTML = data;
    initSlider(leftArrow, rightArrow, element);
}

module.exports = addFilmToMain;