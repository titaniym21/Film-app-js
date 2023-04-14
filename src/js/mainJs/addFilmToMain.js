const initSlider = require('./slider');
const { getHtmlData } = require('./dataToHtml');
const Init = require('./sizeWindow').Init;
async function addFilmToMain(genreName, elementSelector, leftArrowSelector, rightArrowSelector, currIndex = 0) {
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

module.exports = addFilmToMain;


