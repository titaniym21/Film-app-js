const addSliderNextPage = require('./addSliderNextPage');
const requests = require('./requests').requests;
const searchById = require('../search/searchById');
const {API_KEY} = require('./requests').API_KEY;

async function initSlider(prevBtn, nextBtn, element, obj, genreName, currIndex) {
  let currentIndex = currIndex;
  let maxIndex = obj.results.length - 1;
  let page = (maxIndex + 1) / 20 + 1;
  const items = element.querySelectorAll(".item_wrapper");
  function showItem(index) {
    items.forEach((item) => {
      item.style.display = "none";
    });
    items[index].style.display = "block";
    items[index + 1].style.display = "block";
    items[index + 2].style.display = "block";
    items[index + 3].style.display = "block";
    items[index + 4].style.display = "block";
  }
  showItem(currentIndex);

  const prevBtnClickHandler = () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    //console.log(currentIndex);
    showItem(currentIndex);
  };
  prevBtn.addEventListener("click", prevBtnClickHandler);

  const nextBtnClickHandler = () => {
    currentIndex = Math.min(currentIndex + 1, maxIndex - 4);
    //console.log(currentIndex);
    if (currentIndex === maxIndex - 4) {
      nextBtn.removeEventListener("click", nextBtnClickHandler);
      items.forEach((item) => {
        item.removeEventListener("click", itemClickHandler);
      });
      return addSliderNextPage(requests(page), genreName, currentIndex);
    }
    showItem(currentIndex);
  };
  nextBtn.addEventListener("click", nextBtnClickHandler);

  const itemClickHandler = (event) => {
     
  };
  items.forEach((item) => {
    item.addEventListener("click",async function(event) {
      const numObj = await event.target.alt;
      const thisObj = await obj.results[numObj];
      //console.log(thisObj);
      const id = await thisObj.id;
      searchById(id);
    });
  });
}
module.exports = initSlider;