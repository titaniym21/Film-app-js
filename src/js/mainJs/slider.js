const addSliderNextPage = require('./addSliderNextPage');
const requests = require('./requests').requests;
const searchById = require('../search/searchById');
const {API_KEY} = require('./requests').API_KEY;
const heckSizeAttributes2 = require('./sizeWindow').CheckSizeAttributes2;
const createModalWinPlayer = require('./CreateModalWindowPlayer');

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
    console.log(currentIndex);
    showItem(currentIndex);
  };
  prevBtn.addEventListener("click", prevBtnClickHandler);

  const nextBtnClickHandler = () => {
    currentIndex = Math.min(currentIndex + 1, maxIndex - 5);
    console.log(currentIndex);
    if (currentIndex === maxIndex - 5) {
      nextBtn.removeEventListener("click", nextBtnClickHandler);
      prevBtn.removeEventListener("click", prevBtnClickHandler);
      // items.forEach((item) => {
      //   //item.removeEventListener("click", itemClickHandler);
      // });
      return addSliderNextPage(requests(page), genreName, currentIndex);
    }
    showItem(currentIndex);
  };
  nextBtn.addEventListener("click", nextBtnClickHandler);

  // const itemClickHandler = (event) => {
     
  //  };
  items.forEach((item) => {
    item.addEventListener("click",async function(event) {
      const alt = await event.target.alt;
      const classList = await event.target.classList;
      console.log(alt);
      console.log(classList.value);
      if(classList.value === 'play-img') {
        searchById(alt, 'video');
      }
      if(classList.value === 'info-img') {
        searchById(alt);
      }
      if(classList.value === 'add-img') {
        searchById(alt, 'add');
      }
      else {
        return;
      }
    });
  });
}
module.exports = initSlider;