const animationDropList = require('../js/mainJs/dropDownList');
const addFilmToMain = require('../js/mainJs/addFilmToMain');
const getRandomFilm = require('../js/mainJs/mainBackgroundImage');
const requests = require('../js/mainJs/requests').requests;
//const addHtmlToSliderBox = require('../js/mainJs/addHtmlToSliderBox');



async function startMain(obj) {
    const previewItemTitle = document.querySelector('.preview_item_title');
    const main = document.querySelector('.main');
    getRandomFilm('netflixOriginals', main, previewItemTitle);
    for (let key in obj) {
        let tmp = key;
        await addFilmToMain(tmp, `.${tmp}_item`, `.left_arrow_${tmp}`, `.right_arrow_${tmp}`);
    }
}

startMain(requests());


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
const {API_KEY} = require('../js/mainJs/requests');

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






