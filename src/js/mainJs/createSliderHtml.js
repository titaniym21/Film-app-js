
// создать функцию для получения html кода для слайдера
class createSliderTitle {
  constructor(key){
    this.sliderHtml = document.createElement('div');
    this.sliderHtml.classList.add('arrow_slider_title');
    this.sliderHtml.innerHTML = `<h2>${key}</h2>`;
    return this.sliderHtml;
  }
}



class createSliderHtml {
  constructor(key){
    this.sliderHtml = document.createElement('div');
    this.sliderHtml.classList.add('arrow_slider');
    this.sliderHtml.innerHTML = `<button class="left_arrow_${key} left_arrow">&#10148;</button>
    <div class="${key}_item item_slider"></div>
    <button class="right_arrow_${key} right_arrow">&#10148;</button>`;
    return this.sliderHtml;
  }
}

module.exports = {createSliderHtml, createSliderTitle};