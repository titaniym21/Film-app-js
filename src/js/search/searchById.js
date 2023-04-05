'use strict';

let windowModal;
const { CreateModalWindow } = require('./createModalWindow');

function searchById(id) {
    let search = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => {
                let bg = document.createElement('section');
                bg.classList.add('bg');
                body.append(bg);
                windowModal = new CreateModalWindow(obj)
                body.append(windowModal);
        })
        .catch((error) => console.log(error))
}

module.exports = searchById;