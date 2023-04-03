// функция для получения html кода для слайдера
async function getHtmlData(masData) {
  let htmlData = '';
  for (let i = 0; i < masData.length; i++) {
      if (masData[i].poster_path === null) {
        
      } 
      else {
          const image = await fetch(`https://image.tmdb.org/t/p/w500${masData[i].poster_path}`);
          htmlData += `<div class="item_wrapper">
          <img src="${image.url}" alt="" class="image_item_slider">
            <div class="item_buttons">
              <img src="../img/play-button.png" alt="" class="item_button_img">
              <img src="../img/info-button.png" alt="" class="item_button_img">
              <img src="../img/add.png" alt="" class="item_button_img">
            </div>
          </div>`;
      }

  }
  return htmlData;
}

module.exports = getHtmlData;




