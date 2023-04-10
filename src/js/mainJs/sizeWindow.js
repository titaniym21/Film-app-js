const sizeWindow = () => {
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

module.exports = sizeWindow;