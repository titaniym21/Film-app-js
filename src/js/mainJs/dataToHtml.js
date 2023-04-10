// функция для получения html кода для слайдера
function leftArrow (key) {
  const sliderHtmlLeftArrow = document.createElement('div');
    sliderHtmlLeftArrow.classList.add(`left_arrow_${key}`);
    sliderHtmlLeftArrow.classList.add('left_arrow');
    sliderHtmlLeftArrow.classList.add('arrow');
    const leftSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    leftSvg.setAttribute('fill', 'currentColor');
    leftSvg.setAttribute('viewBox', '0 0 16 16');
    const leftPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leftPath.setAttribute('fill-rule', 'evenodd');
    leftPath.setAttribute('d', 'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z');
    leftSvg.append(leftPath);
    sliderHtmlLeftArrow.append(leftSvg);
    return sliderHtmlLeftArrow;

}

function rightArrow (key) {
  const sliderHtmlRightArrow = document.createElement('div');
  sliderHtmlRightArrow.classList.add(`right_arrow_${key}`);
  sliderHtmlRightArrow.classList.add('right_arrow');
  sliderHtmlRightArrow.classList.add('arrow');
  const rightSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  rightSvg.setAttribute('fill', 'currentColor');
  rightSvg.setAttribute('viewBox', '0 0 16 16');
  const rightPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  rightPath.setAttribute('fill-rule', 'evenodd');
  rightPath.setAttribute('d', 'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z');
  rightSvg.append(rightPath);
  sliderHtmlRightArrow.append(rightSvg);
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
          const id = masData[i].id;
          const imageUrl = URL.createObjectURL(imageBlob);
          const itemWrapper = document.createElement('div');
          itemWrapper.classList.add('item_wrapper');
          itemWrapper.setAttribute('id', `${id}`);
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
          const watchSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          watchSvg.setAttribute('fill', 'currentColor');
          watchSvg.setAttribute('viewBox', '0 0 16 16');
          const watchPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          watchPath.setAttribute('d', 'm11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z');
          watchSvg.append(watchPath);
          watch.append(watchSvg);
          buttonContainer.append(watch);
          const queue = document.createElement('div');
          queue.classList.add('queue');
          const queueSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          queueSvg.setAttribute('fill', 'currentColor');
          queueSvg.setAttribute('viewBox', '0 0 16 16');
          const queuePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          queuePath.setAttribute('d', 'M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z');
          queueSvg.append(queuePath);
          queue.append(queueSvg);
          buttonContainer.append(queue);
          const info = document.createElement('div');
          info.classList.add('star', 'queue');
          const infoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          infoSvg.setAttribute('fill', 'currentColor');
          infoSvg.setAttribute('viewBox', '0 0 16 16');
          const infoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          infoPath.setAttribute('d', 'M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm.5-9a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V5zm0 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z');
          infoSvg.append(infoPath);
          info.append(infoSvg);
          buttonContainer.append(info);
          overlay.append(buttonContainer);
         
          // добавить в htmlData
          htmlData += itemWrapper.outerHTML;
      }
  }
  htmlData += rightArrow(key).outerHTML;
  return htmlData;
}


module.exports = getHtmlData;
