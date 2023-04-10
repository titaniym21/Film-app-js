function createSliderHtml(key) {
    const sliderHtml = document.createElement('div');
    sliderHtml.classList.add('content-area');
    const sliderHtmlTitle = document.createElement('h2');
    sliderHtmlTitle.classList.add('arrow_slider_title');
    sliderHtmlTitle.innerHTML = `<h2>${key}</h2>`;
    const sliderHtmlSlider = document.createElement('div');
    sliderHtmlSlider.classList.add('arrow_slider');

    const sliderHtmlLeftArrow = document.createElement('div');
    sliderHtmlLeftArrow.classList.add(`left_arrow_${key}`);
    sliderHtmlLeftArrow.classList.add('left_arrow');
    sliderHtmlLeftArrow.classList.add('arrow');
    const leftSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    leftSvg.setAttribute('fill', 'currentColor');
    leftSvg.setAttribute('viewBox', '0 0 16 16');
    leftSvg.setAttribute('onclick', 'Previous(this);');
    const leftPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leftPath.setAttribute('fill-rule', 'evenodd');
    leftPath.setAttribute('d', 'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z');
    leftSvg.append(leftPath);
    sliderHtmlLeftArrow.append(leftSvg);

    const sliderHtmlItem = document.createElement('div');
    sliderHtmlItem.classList.add(`${key}_item`);
    sliderHtmlItem.classList.add('item_slider');
    
    const sliderHtmlRightArrow = document.createElement('div');
    sliderHtmlRightArrow.classList.add(`right_arrow_${key}`);
    sliderHtmlRightArrow.classList.add('right_arrow');
    sliderHtmlRightArrow.classList.add('arrow');
    const rightSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    rightSvg.setAttribute('fill', 'currentColor');
    rightSvg.setAttribute('viewBox', '0 0 16 16');
    rightSvg.setAttribute('onclick', 'Next(this);');
    const rightPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    rightPath.setAttribute('fill-rule', 'evenodd');
    rightPath.setAttribute('d', 'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z');
    rightSvg.append(rightPath);
    sliderHtmlRightArrow.append(rightSvg);

    //sliderHtmlSlider.append(sliderHtmlLeftArrow);
    sliderHtmlSlider.append(sliderHtmlItem);
    //sliderHtmlSlider.append(sliderHtmlRightArrow);
    sliderHtml.append(sliderHtmlTitle);
    sliderHtml.append(sliderHtmlSlider);
    return sliderHtml;
}


module.exports = createSliderHtml;