import { animationDropList } from '../js/mainJs/dropDownList.js';
//const animationDropList = require('../js/mainJs/dropDownList');
import { addFilmToMain } from '../js/mainJs/addFilmToMain.js';
//const addFilmToMain = require('../js/mainJs/addFilmToMain');
import {getRandomFilm} from '../js/mainJs/mainBackgroundImage.js';
//const getRandomFilm = require('../js/mainJs/mainBackgroundImage');
import {requests} from '../js/mainJs/requests.js';
//const requests = require('../js/mainJs/requests').requests;
import {createSliderHtml} from '../js/mainJs/createSliderHtml.js';
//const createSliderHtml = require('../js/mainJs/createSliderHtml');
import { Init } from '../js/mainJs/sizeWindow.js';
//const Init = require('../js/mainJs/sizeWindow').Init;
import { startUserIcon } from '../start/startJs/startUserIcon.js';
//const {startUserIcon} = require("../start/startJs/startUserIcon.js");
import { getTrailer, getGenres, getProductionCompanies} from '../js/search/getData.js';
import { delFromMyList, delModalWindow, delBoxSearch } from '../js/search/functionDel.js';
import {createSearchList} from '../js/search/createSearchList.js';
//import {arrWindow} from '../js/search/createModalWindow.js';
import { API_KEY } from '../js/mainJs/requests.js';
import { fetchMovies } from '../js/mainJs/loadInfo.js';
startUserIcon();


async function startMain(obj) {
    await fetchMovies(obj);
    await getRandomFilm('Popular');
    const sliderBox = document.querySelector('.slider_box');
    for (let key in obj) {
        let sliderHtml = await new createSliderHtml(key);
        sliderBox.append(sliderHtml);
        await addFilmToMain(key, `.${key}_item`, `.left_arrow_${key}`, `.right_arrow_${key}`);
    }
}
startMain(requests()).then(() => Init());

window.addEventListener("resize", () => {
    Init();
});

//--------------------------------------------поиск------------------------------------------------------------


const header = document.querySelector('.header');
header.addEventListener('click', animationDropList);
const body = document.body;
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
let input = searchInput;

// функция глобального поиска из инпут, вызывает функцию создание элемента с результатом поиска

function globalSearch() {
    let input = searchInput.value;
    let search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => obj.results)
        .then((obj) => createSearchList(obj))
        .catch((error) => console.log(error))
}

// слушатель при поиске(enter)

function enter(event) {
    if (event.key === 'Enter') {
        if (searchInput.value.length > 0) {
            globalSearch();
            body.removeEventListener('keydown', enter);
        }
    }
}

function focusInput() {
    body.addEventListener('keydown', enter);
}

input.addEventListener('focus', focusInput)
searchButton.addEventListener('click', globalSearch);


//--------------------------------------------модальное окно------------------------------------------------------------


const ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

window.onscroll = function () {
    ScrollFunction();
}

