const animationDropList = require('../js/mainJs/dropDownList');
const addFilmToMain = require('../js/mainJs/addFilmToMain');
const getRandomFilm = require('../js/mainJs/mainBackgroundImage');
const requests = require('../js/mainJs/requests').requests;
const fetchMovies = require('../js/mainJs/loadInfo').fetchMovies;
const createSliderHtml = require('../js/mainJs/createSliderHtml');
fetchMovies(requests());






async function startMain(obj) {
    getRandomFilm('Popular');
    const sliderBox = document.querySelector('.slider_box');
    for (let key in obj) {
        let sliderHtml = await new createSliderHtml(key);
        sliderBox.append(sliderHtml);
        await addFilmToMain(key, `.${key}_item`, `.left_arrow_${key}`, `.right_arrow_${key}`);
    }
}
startMain(requests()).then(() => {
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
        }
    }
}

body.addEventListener('keydown', enter);
searchButton.addEventListener('click', globalSearch);


//--------------------------------------------модальное окно------------------------------------------------------------



let num_cards_GLOBAL = 5;


const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;
    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

const CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("item_slider");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1501) {
        new_num_cards = 5;
    } else if (width <= 1500 && width > 1100) {
        new_num_cards = 4;
    } else if (width <= 1100 && width > 520) {
        new_num_cards = 3;
    } else if (width <= 520) {
        new_num_cards = 2;
    }

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
    }

    num_cards_GLOBAL = new_num_cards;
};



ArrowSliderStyle = () => {
    let carousels = document.getElementsByClassName("item_slider");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;
        let btn_width =
            carousels[i].children[0].clientWidth +
            carousels[i].children[carousels[i].children.length - 1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 5;
        let initial_width = 1920;
        let initial_height = 1080;

        let content_titles = carousels[i].getElementsByClassName("item_wrapper");

        for (let j = 0; j < content_titles.length; j++) {
            content_titles[j].style.marginLeft = `${card_margin}px`;
        }

        let card_width =
            (carousel_width - btn_width - card_margin * (num_cards + 1)) / num_cards;

        let card_height = (card_width * initial_height) / initial_width;

        for (let j = 0; j < content_titles.length; j++) {
            content_titles[j].style.width = `${card_width}px`;
            content_titles[j].style.height = `${card_height}px`;
        }
    }
};


const CheckCards = () => {
    let carousels = document.getElementsByClassName("item_slider");


    for (let i = 0; i < carousels.length; i++) {
        let carousel = carousels[i];
        let carousel_width;
        if (carousel) {
            carousel_width = carousel.offsetWidth;
        } else {
            console.log("Элемент не найден");
        }

        let btn_widthl = document.getElementsByClassName("arrow")[0];
        let btn_widthr = document.getElementsByClassName("arrow")[1];
        let btn_width;
        if (btn_widthl && btn_widthr) {
            btn_widthl = btn_widthl.offsetWidth;
            btn_widthr = btn_widthr.offsetWidth;
            btn_width = btn_widthl + btn_widthr;
        }else {
            console.log("Элемент не найден");
        }

        let num_cards = num_cards_GLOBAL;
        let card_margin = 5;
        let initial_width = 1920;
        let initial_height = 1080;
        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("item_wrapper");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

const itemWrapperStyle = () => {
    let carousel = document.getElementsByClassName("item_slider")[0];
    let carousel_width;
    if (carousel) {
        carousel_width = carousel.offsetWidth;
      } else {
        console.log("Элемент не найден");
      }

    let btn_widthl = document.getElementsByClassName("arrow")[0];
    let btn_widthr = document.getElementsByClassName("arrow")[1];
    let btn_width;
    if (btn_widthl && btn_widthr) {
        btn_widthl = btn_widthl.offsetWidth;
        btn_widthr = btn_widthr.offsetWidth;
        btn_width = btn_widthl + btn_widthr;
      }else {
        console.log("Элемент не найден");
    }

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale =
        (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
        initial_width;

    let content_titles = document.getElementsByClassName("arrow_slider_title");

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    // let carousels = document.getElementsByClassName("item_slider");
    // for (let i = 0; i < carousels.length; i++) {
    //     //carousels[i].style.backgroundColor = `#333`;
    //     carousels[i].style.width = initial_width * (scale / 100) + "px";
    //     carousels[i].style.height = initial_height * (scale / 100) + "px";
    //     carousels[i].style.margin = `0px ${card_margin}px`;
    //     carousels[i].style.minWidth = initial_width * (scale / 100) + "px";
    //     carousels[i].style.minHeight = initial_height * (scale / 100) + "px";
    // }
};


const Init = () =>  {
    CheckSizeAttributes();
    ArrowSliderStyle();
    CheckCards();
    itemWrapperStyle();
}




window.addEventListener("resize", () => {
    Init();
});





