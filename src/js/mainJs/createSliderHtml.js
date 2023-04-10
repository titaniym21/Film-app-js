
function createSliderHtml(key) {
    const sliderHtml = document.createElement('div');
    sliderHtml.classList.add('content-area');
    const sliderHtmlTitle = document.createElement('h2');
    sliderHtmlTitle.classList.add('arrow_slider_title');
    sliderHtmlTitle.innerHTML = `<h2>${key}</h2>`;
    const sliderHtmlSlider = document.createElement('div');
    sliderHtmlSlider.classList.add('arrow_slider');
    const sliderHtmlItem = document.createElement('div');
    sliderHtmlItem.classList.add(`${key}_item`);
    sliderHtmlItem.classList.add('item_slider');
    sliderHtmlSlider.append(sliderHtmlItem);
    sliderHtml.append(sliderHtmlTitle);
    sliderHtml.append(sliderHtmlSlider);
    return sliderHtml;
}


module.exports = createSliderHtml;