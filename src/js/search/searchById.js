'use strict';

let windowModal;
const { CreateModalWindow } = require('./createModalWindow');
const { CreateModalWindowPlayer } = require('../mainJs/CreateModalWindowPlayer');

/** @module searchById */

/** 
 * The searchById function makes a request to the server, we call the class constructor <br/>
 * passing the promise object into the arguments. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {string} id - id of the movie for which there will be a request to the server
 * @param {string} key - identifier by which the modal window object is created
 * @returns {undefined}
 */

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