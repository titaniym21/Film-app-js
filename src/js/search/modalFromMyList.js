'use strict';

const { ModalWindow } = require('../classSearch/classModalWindow');
const { Poster } = require('../classSearch/classPoster');
const { Content } = require('../classSearch/classContent');
const { ButtonClose } = require('../classSearch/classButtonClose');
const { Title } = require('../classSearch/classTitle');
const { Video } = require('../classSearch/classVideo');
const { Overview } = require('../classSearch/classOverview');
const { Genres } = require('../classSearch/classGenres');
const { ProductionCompanies } = require('../classSearch/classProductionCompanies');
const { Budget } = require('../classSearch/classBudget');
let windowMod;

/** @module modalFromMyList */

/**
 * The CreateModalWindow class creates an element with information and a trailer for the selected movie.
 * The CreateModalWindow class uses various functionality from other modules: <br/>
 * [ModalWindow]{@link module:classModalWindow~ModalWindow}, <br/>
 * [Poster]{@link module:classPoster~Poster}, <br/>
 * [Content]{@link module:classContent~Content}, <br/>
 * [ButtonClose]{@link module:classButtonClose~ButtonClose}, <br/>
 * [Title]{@link module:classTitle~Title}, <br/>
 * [Video]{@link module:classVideo~Video}, <br/>
 * [Overview]{@link module:classOverview~Overview}, <br/>
 * [Genres]{@link module:classGenres~Genres}, <br/>
 * [ProductionCompanies]{@link module:classProductionCompanies~ProductionCompanies}, <br/>
 * [Budget]{@link module:classBudget~Budget}. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com>
 */

class CreateModalWindow {
     /**
     * Create HTMLElement.
     * @param {object} obj - promise object
     * @returns {object}
     */
    constructor(obj) {
        this.modalWindow = new ModalWindow();
        this.poster = new Poster(obj);
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.title = new Title(obj);
        this.video = new Video(obj);
        this.overview = new Overview(obj);
        this.genres = new Genres(obj);
        this.productionCompanies = new ProductionCompanies(obj);
        this.budget = new Budget(obj);
        this.content.append(this.title, this.video, this.overview, this.genres, this.productionCompanies, this.budget);
        this.modalWindow.append(this.poster, this.content, this.buttonClose);
        return this.modalWindow;
    }
}

/** 
 * The searchById function makes a request to the server, we call the class constructor <br/>
 * passing the promise object into the arguments. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {string} id - id of the movie for which there will be a request to the server
 * @returns {undefined}
 */

function searchById(id) {
    let search = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    fetch(search)
        .then((data) => data.json())
        .then((obj) => {
            let bg = document.createElement('section');
            bg.classList.add('bg');
            body.append(bg);
            windowMod = new CreateModalWindow(obj);
            body.append(windowMod);
            
        })
        .catch((error) => console.log(error))
}

/** 
 * The modalFromMyList function checks on which tag the listener is on, <br/>
 * if LI then considers the attribute (id) of the parent element <br/>
 * and calls the function passing the id argument. <br/>
 * @author Stanislav Kuzin <staskuzinman@gmail.com> 
 * @param {object} event - the object where the listener fired
 * @returns {undefined}
 */

function modalFromMyList(event) {
    if (event.target.tagName === 'LI') {
        event.target.parentNode.classList.add("closeAnimHetflix");
        event.target.parentNode.classList.remove("animHetflix");
        event.target.parentNode.classList.remove("closeAnimHetflix");
        let id = event.target.getAttribute('alt');
        searchById(id);
    }
}

module.exports = modalFromMyList;