const getHtmlData = require('../js/dataToHtml');
const initSlaider = require('../js/slider');
const animationDropList = require('../js/dropDownList');
const fs = require('fs');
const path = require('path');

let masElemetLisener = [];


async function addGanresSlider() {
    try {
        const files = await fs.promises.readdir(path.join(__dirname, '../data'));

        for (const file of files) {
            if (file !== 'log.json') {
                const movies = JSON.parse(await fs.promises.readFile((path.join(__dirname, `../data/${file}`)), 'utf8')).results;
                const fileWithoutExt = file.split('.')[0];

                const htmlItemGanres = `<div class="arrow_slider">
                    <button id="left_arrow_${fileWithoutExt}" class="arrow"><</button>
                    <div id="${fileWithoutExt}_item" class="item_slider"></div>
                    <button id="right_arrow_${fileWithoutExt}" class="arrow">></button>
                </div>`;

                const sliderBox = document.querySelector('.slider_box');
                sliderBox.innerHTML += htmlItemGanres;

                const htmlData = await getHtmlData(movies);

                let item = document.getElementById(`${fileWithoutExt}_item`);
                item.innerHTML = htmlData;

                let leftArrow = document.getElementById(`left_arrow_${fileWithoutExt}`);
                let rightArrow = document.getElementById(`right_arrow_${fileWithoutExt}`);

                masElemetLisener.push({leftArrow, rightArrow, item}); ;
            }
        }
    } catch (err) {
        console.error(err);
    }
}
addGanresSlider().then(() => {
    try {
        masElemetLisener.forEach((element) => {
            console.log(element);
            initSlaider(element.leftArrow, element.rightArrow, element.item);
        });
    } catch (err) {
        console.error(err);
    }
    
});




const header = document.querySelector('.header');
header.addEventListener('click', animationDropList);
 
const { getTrailer, getGenres, getProductionCompanies } = require('../js/search/getData');
const { delFromMyList, delModalWindow, delBoxSearch } = require('../js/search/functionDel');
const createSearchList = require('../js/search/createSearchList');
const arrWindow = require('../js/search/createModalWindow');
const body = document.body;
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const { API_KEY } = require('../js/requests');

function globalSearch() {
    let input = searchInput.value;
    let search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => obj.results) 
        .then((obj) => createSearchList(obj))
        .catch((error) => console.log(error))
}

function enter(event) {
    if (event.key === 'Enter') {
        if (searchInput.value.length > 0) {
            globalSearch();
        }
    }
}

body.addEventListener('keydown', enter);
searchButton.addEventListener('click', globalSearch);






