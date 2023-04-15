//функция для получения html кода для слайдера
const addFilmToFavoritesMain = require('../mainJs/addFilmToFavoritesMain');




function leftArrow (key) {
    const sliderHtmlLeftArrow = document.createElement('div');
    sliderHtmlLeftArrow.classList.add(`left_arrow_${key}`);
    sliderHtmlLeftArrow.classList.add('left_arrow');
    sliderHtmlLeftArrow.classList.add('arrow');
    const imgLeftArrow = document.createElement('img');
    imgLeftArrow.setAttribute('src', '../img/left-arrow.png');
    sliderHtmlLeftArrow.append(imgLeftArrow);
    return sliderHtmlLeftArrow;

}

function rightArrow (key) {
    const sliderHtmlRightArrow = document.createElement('div');
    sliderHtmlRightArrow.classList.add(`right_arrow_${key}`);
    sliderHtmlRightArrow.classList.add('right_arrow');
    sliderHtmlRightArrow.classList.add('arrow');
    const imgRightArrow = document.createElement('img');
    imgRightArrow.setAttribute('src', '../img/right-arrow.png');
    sliderHtmlRightArrow.append(imgRightArrow);
    return sliderHtmlRightArrow;
}


async function getHtmlData(masData, key) {
  let htmlData = '';
  htmlData += leftArrow(key).outerHTML;
  for (let i = 0; i < masData.length; i++) {
      if (masData[i].backdrop_path === null) {
        
      } 
      else {
          const image = await fetch(`https://image.tmdb.org/t/p/w500${masData[i].backdrop_path}`);
          const imageBlob = await image.blob();
          const title = masData[i].original_title;
          const alt = masData[i].id;
          //const obj = { title: masData[i].title, id: masData[i].id };
          const imageUrl = URL.createObjectURL(imageBlob);
          const itemWrapper = document.createElement('div');
          itemWrapper.classList.add('item_wrapper');
          itemWrapper.style.backgroundImage = `url(${imageUrl})`;
          const overlay = document.createElement('div');
          overlay.classList.add('overlay');
          itemWrapper.append(overlay);
          const titleItem = document.createElement('h4');
          titleItem.textContent = title;
          overlay.append(titleItem);
          const buttonContainer = document.createElement('div');
          buttonContainer.classList.add('button-container');
          const watch = document.createElement('div');
          watch.classList.add('watch');
          watch.style.backgroundImage = `url(../img/play-button-red.png)`;
          const imgWatch = document.createElement('img');
          imgWatch.setAttribute('src', '../img/play-button-red.png');
          imgWatch.setAttribute('alt', `${alt}`);
          imgWatch.classList.add('play-img');
          watch.append(imgWatch);
          buttonContainer.append(watch);
          const queue = document.createElement('div');
          queue.classList.add('add');
          const imgAdd = document.createElement('img');
          imgAdd.setAttribute('src', '../img/add.png');
          imgAdd.classList.add('add-img');
          imgAdd.setAttribute('alt', `${title} + ${alt}`);
          queue.append(imgAdd);
          buttonContainer.append(queue);
          const info = document.createElement('div');
          info.classList.add('info');
          const imgInfo = document.createElement('img');
          imgInfo.setAttribute('src', '../img/info.png');
          imgInfo.setAttribute('alt', `${alt}`);
          imgInfo.classList.add('info-img');
          info.append(imgInfo);
          buttonContainer.append(info);
          overlay.append(buttonContainer);
          htmlData += itemWrapper.outerHTML;
      }
  }
  htmlData += rightArrow(key).outerHTML;
  return htmlData;
}


module.exports = {
    getHtmlData,
    leftArrow,
    rightArrow
};
