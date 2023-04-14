'use strict';

let windowModal;
const { CreateModalWindow } = require('./createModalWindow');
const { CreateModalWindowPlayer } = require('../mainJs/CreateModalWindowPlayer');

// запрос на сервер и создание модального окна с информацией из промиса(мейн, поиск, жанры)

function searchById(id, key = 'info') {
        let search = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        fetch(search)
            .then((data) => data.json())
            .then((obj) => {
                try {
                    if (obj.success === false) {
                        throw new Error('The resource you requested could not be found.');
                    } else {
                        let bg = document.createElement('section');
                        bg.classList.add('bg');
                        body.append(bg);
                        if (key === 'info') {
                            windowModal = new CreateModalWindow(obj).getModalWindow();
                        }
                        if (key === 'video') {
                            windowModal = new CreateModalWindowPlayer(obj).getModalWindow();
                        }
                        //windowModal = new CreateModalWindow(obj).getModalWindow();
                        body.append(windowModal);
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        .catch((error) => console.log(error));
    }

module.exports = searchById;