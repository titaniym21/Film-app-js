
let body = document.body as HTMLElement;
const { API_KEY } = require('../mainJs/requests');
const { openOtherPage } = require('./openPage');
const { openFirstPage } = require('./openPage');
const changesBoxButton = require('./changesBoxButton');

function getInfoForList(page: number, genreId: number): void {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    if ((body.lastElementChild as HTMLElement).classList.contains('bg2') === false) {
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openFirstPage(obj.results))
            .catch((error) => console.log(error))
    } else {
        changesBoxButton(page);
        fetch(url)
            .then((data) => data.json())
            .then((obj) => openOtherPage(obj.results)) 
            .catch((error) => console.log(error))
    }
}

module.exports = getInfoForList;