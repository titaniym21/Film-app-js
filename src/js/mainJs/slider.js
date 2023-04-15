// initSlider - функция инициализации одного слайдера  на main странице
// prevBtn - кнопка "назад"
// nextBtn - кнопка "вперед"
// element - элемент, в котором находятся слайды с уникальным классом
// obj - объект, в котором находятся данные о фильмах
// genreName - название жанра
// currIndex - текущий индекс слайда



const addSliderNextPage = require('./addSliderNextPage');
const requests = require('./requests').requests;
const searchById = require('../search/searchById');
const {API_KEY} = require('./requests').API_KEY;
const addFilmToFavoritesMain = require('./addFilmToFavoritesMain');
const heckSizeAttributes2 = require('./sizeWindow').CheckSizeAttributes2;

async function initSlider(prevBtn, nextBtn, element, obj, genreName, currIndex) {
  let currentIndex = currIndex;
  let maxIndex = obj.results.length - 1;
  let page = (maxIndex + 1) / 20 + 1;
  const items = element.querySelectorAll(".item_wrapper");
  function showItem(index) {
    heckSizeAttributes2(items, index);
  }
  showItem(currentIndex);

  const prevBtnClickHandler = () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showItem(currentIndex);
  };
  prevBtn.addEventListener("click", prevBtnClickHandler);

  const nextBtnClickHandler = () => {
    currentIndex = Math.min(currentIndex + 1, maxIndex - 5);
    if (currentIndex === maxIndex - 5) {
      nextBtn.removeEventListener("click", nextBtnClickHandler);
      prevBtn.removeEventListener("click", prevBtnClickHandler);
      return addSliderNextPage(requests(page), genreName, currentIndex);
    }
    showItem(currentIndex);
  };
  nextBtn.addEventListener("click", nextBtnClickHandler);

  
  items.forEach((item) => {
    item.addEventListener("click",function(event) {
      const alt = event.target.alt;
        console.log(alt);
      const classList = event.target.classList;
      if (classList.value === 'play-img') {
        searchById(alt, 'video');
      }
      if (classList.value === 'info-img') {
        searchById(alt, 'info');
      }
      if(classList.value === 'add-img') {
          const parts = alt.split(" + ");
          const title = parts[0];
          const id = parseInt(parts[1]);
          const movie = {title, id};
          addFilmToFavoritesMain(movie);
      }
    });
  });
}
module.exports = initSlider;