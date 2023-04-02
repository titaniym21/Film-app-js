const animationDropList = require('../js/dropDownList');
const addFilmToMain = require('../js/addFilmToMain');
const getRandomFilm = require('../js/mainBackgroundImage');
const test = require('../js/loadInfo').test;
const requests = require('../js/requests').requests;


//  const obj = requests(3);
//  const key = 'netflixPopular';
//  test(obj, key);


addFilmToMain('netflixOriginals', '.netflixOriginals_item', '.left_arrow_netflixOriginals', '.right_arrow_netflixOriginals');
addFilmToMain('netflixPopular', '.netflixPopular_item', '.left_arrow_netflixPopular', '.right_arrow_netflixPopular');
addFilmToMain('netflixTopRated', '.netflixTopRated_item', '.left_arrow_netflixTopRated', '.right_arrow_netflixTopRated');
addFilmToMain('topRatedMovies', '.topRatedMovies_item', '.left_arrow_topRatedMovies', '.right_arrow_topRatedMovies');
addFilmToMain('popularMovies', '.popularMovies_item', '.left_arrow_popularMovies', '.right_arrow_popularMovies');
addFilmToMain('scienceFictionMovies', '.scienceFictionMovies_item', '.left_arrow_scienceFictionMovies', '.right_arrow_scienceFictionMovies');

// картинка главного єкрана + название

const previewItemTitle = document.querySelector('.preview_item_title');
const main = document.querySelector('.main');
getRandomFilm('netflixOriginals', main, previewItemTitle);


//--------------------------------------------поиск------------------------------------------------------------

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






