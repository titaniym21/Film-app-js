const animationDropList = require('../js/mainJs/dropDownList');
const addFilmToMain = require('../js/mainJs/addFilmToMain');
const getRandomFilm = require('../js/mainJs/mainBackgroundImage');
const requests = require('../js/mainJs/requests').requests;
const createSliderHtml = require('../js/mainJs/createSliderHtml');
const Init = require('../js/mainJs/sizeWindow').Init;
const {startUserIcon} = require("../start/startJs/startUserIcon.js");
startUserIcon();


async function startMain(obj) {
    getRandomFilm('Popular');
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

const {getTrailer, getGenres, getProductionCompanies} = require('../js/search/getData');
const {delFromMyList, delModalWindow, delBoxSearch} = require('../js/search/functionDel');
const createSearchList = require('../js/search/createSearchList');
const arrWindow = require('../js/search/createModalWindow');
const body = document.body;
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const { API_KEY } = require('../js/mainJs/requests');
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




