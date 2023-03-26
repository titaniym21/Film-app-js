'use strict';

const searchById = require('./searchById');

function getElemFromList(event) {
    if (event.target.parentNode.tagName === 'DIV') {
        let listItem = event.target.parentNode.lastChild.textContent;
        let search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${listItem}`;
        fetch(search)
            .then((data) => data.json())
            .then((obj) => obj.results[0].id) 
            .then((id) => searchById(id))
            .catch((error) => console.log(error))
    }
}

module.exports = getElemFromList;