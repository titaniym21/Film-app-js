// функция для получения html кода для слайдера
function getHtmlData(masData) {
    let htmlData = '';
    for (let i = 0; i < masData.length; i++) {
        htmlData += `<div class="item_wrapper">
            <img src="https://image.tmdb.org/t/p/w500${masData[i].poster_path}" alt="" class="image_item_slider">
        <div class="slider_info">
            <h3 class="slider_title">${masData[i].title}</h3>
            <p class="slider_text">${masData[i].overview}</p>
        </div>
    </div>`;
    }
    return htmlData;
}

module.exports = getHtmlData;