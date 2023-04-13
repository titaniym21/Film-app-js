'use strict';

let windowModal;
const { CreateModalWindow } = require('./createModalWindow');
const {CreateModalWindowPlayer} = require('../mainJs/CreateModalWindowPlayer');

// запрос на сервер и создание модального окна с информацией из промиса(мейн, поиск, жанры)

function searchById(id, key = 'all') {
        let search = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        console.log(search);
        let search2 = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos`;
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
                        if (key === 'all') {
                            windowModal = new CreateModalWindow(obj);
                            body.append(windowModal);
                        }
                        if (key === 'video') {
                            windowModal = new CreateModalWindowPlayer(obj);
                            console.log(windowModal);
                            body.append(windowModal);
                        }
                        
                    }
                } catch (error) {
                    console.log(error);
                    fetch(search2)
                        .then((data) => data.json())
                         .then((obj) => {
                             try {
                                 if (obj.success === false) {
                                     throw new Error('The resource you requested could not be found.');
                                 } else {
                                     let bg = document.createElement('section');
                                     bg.classList.add('bg');
                                     body.append(bg);
                                     if (key === 'all') {
                                        windowModal = new CreateModalWindow(obj);
                                        body.append(windowModal);
                                    }
                                    if (key === 'add') {
                                        windowModal = new CreateModalWindow(obj);
                                        body.append(windowModal);
                                    }
                                    if (key === 'video') {
                                        windowModal = new CreateModalWindowPlayer(obj);
                                        body.append(windowModal);
                                    }
                                     
                                 }
                             } catch (error) {
                                 console.log(error);
                             }
                         })
                        .catch((error) => console.log(error));
                }
            })
        .catch((error) => console.log(error));
    }

module.exports = searchById;