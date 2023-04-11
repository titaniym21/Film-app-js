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

const CheckSizeAttributes = (num_cards_GLOBAL) => {
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
    return num_cards_GLOBAL;
};


const CheckSizeAttributes2 = (htmlElement, currIndex) => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let items = htmlElement;
    items.forEach((item) => {
        item.style.display = "none";
      });
        if (width > 1501) {
            items[currIndex].style.display = "block";
            items[currIndex + 1].style.display = "block";
            items[currIndex + 2].style.display = "block";
            items[currIndex + 3].style.display = "block";
            items[currIndex + 4].style.display = "block";
        } else if (width <= 1500 && width > 1100) {
            items[currIndex].style.display = "block";
            items[currIndex + 1].style.display = "block";
            items[currIndex + 2].style.display = "block";
            items[currIndex + 3].style.display = "block";
        } else if (width <= 1100 && width > 520) {
            items[currIndex].style.display = "block";
            items[currIndex + 1].style.display = "block";
            items[currIndex + 2].style.display = "block";
        } else if (width <= 520) {
            items[currIndex].style.display = "block";
            items[currIndex + 1].style.display = "block";
        }

    return;


};



ArrowSliderStyle = (num_cards_GLOBAL) => {
    let carousels = document.getElementsByClassName("item_slider");

    for (let i = 0; i < carousels.length; i++) {
        let carusel = carousels[i];
        let carousel_width = carusel.offsetWidth;


        let btn_widthl = carusel.children[0];
        let btn_widthr = carusel.children[carusel.children.length - 1];
        let btn_width;
        if (btn_widthl && btn_widthr) {
            btn_widthl = btn_widthl.offsetWidth;
            btn_widthr = btn_widthr.offsetWidth;
            btn_width = btn_widthl + btn_widthr;
        }else {
            console.log("Элемент не найден");
        }


        let num_cards = CheckSizeAttributes(num_cards_GLOBAL);
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


const CheckCards = (num_cards_GLOBAL) => {
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

        let num_cards = CheckSizeAttributes(num_cards_GLOBAL);
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

const ResizeHeader = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;
    if (width <= 815) {
        console.log("Мобильная версия");
        if (document.getElementsByClassName("hamburger").length <= 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("header-menu")[0];
            let right_nav = header.getElementsByClassName("user_menu")[0];

            let hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");
            hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
            main_nav.remove();
            right_nav.remove();

            let bottom_header = document.createElement("div");
            bottom_header.classList.add("header-bottom");
            bottom_header.append(main_nav, right_nav);
            bottom_header.style.display = "none";

            hamburger.addEventListener("click", function () {
                if (bottom_header.style.display == "none") {
                    bottom_header.style.display = "flex";
                    header.style.paddingBottom = "9px";
                    header.style.paddingTop = "9px";
                } else {
                    bottom_header.style.display = "none";
                    header.style.paddingBottom = "0px";
                    header.style.paddingTop = "0px";
                }
            });

            header.classList.add("header-change");

            let top_header = document.createElement("div");
            top_header.classList.add("header-top");
            console.log(header.children[0]);
            top_header.append(header.children[0], hamburger);

            header.innerHTML = "";
            header.append(top_header, bottom_header);
        }
    } else {
        if (document.getElementsByClassName("hamburger").length > 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("header-menu")[0];
            let right_nav = header.getElementsByClassName("user_menu")[0];
            // let brand = header.getElementsByClassName("logo")[0];

            header.classList.remove("header-change");
            header.children[0].remove();
            header.children[0].remove();
            header.append(main_nav, right_nav);
        }
    }
};



async function Init (){
   await CheckSizeAttributes();
   await ArrowSliderStyle(num_cards_GLOBAL);
   await CheckCards(num_cards_GLOBAL);
   await ResizeHeader();
}

module.exports = {Init, CheckSizeAttributes, CheckSizeAttributes2};