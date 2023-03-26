const getHtmlData = require('../js/dataToHtml');
//const initSlaider = require('../js/slider');
const animationDropList = require('../js/dropDownList');
const fs = require('fs');
const path = require('path');




// //fetchTrending.json , указали путь к файлу , распарсили и получили массив результатов
// let popularMovies = JSON.parse(fs.readFileSync((path.join(__dirname, '../data/popularMovies.json')), 'utf8')).results;
// // визвали функцию для получения html вставки для слайдера, получили строку
// let htmlDataTrends = getHtmlData(popularMovies);
// // выбрали элемент в который будем вставлять html 
// const itemTrends = document.querySelector('.trending_item');

// // вставили html
// itemTrends.innerHTML = htmlDataTrends;


// const leftArrowTrending = document.querySelector('.left_arrow_trending');
// const rightArrowTrending = document.querySelector('.right_arrow_trending');

// initSlaider(leftArrowTrending, rightArrowTrending, itemTrends);



// пройтись по всем элементам в папке data создать вставку в html и дале вызвать функцию initSlaider

function addGanresSlider() {
    // пройтись по всем файлам в папке data кроме log.json
    fs.readdir(path.join(__dirname, '../data'), (err, files) => {
        files.forEach(file => {
            if (file !== 'log.json') {
                // получить массив результатов
                let movies = JSON.parse(fs.readFileSync((path.join(__dirname, `../data/${file}`)), 'utf8')).results;
                // получить html вставку
                // отбросить расширение файла
                let fileWithoutExt = file.split('.')[0];
                console.log(fileWithoutExt);

                let htmlItemGanres = `<div class="arrow_slider">
                    <button class="left_arrow_${fileWithoutExt} arrow"><</button>
                    <div class="item_slider ${fileWithoutExt}_item"></div>
                    <button class="arrow right_arrow_${fileWithoutExt} arrow">></button>
                </div>`;

                const sliderBox = document.querySelector('.slider_box');
                sliderBox.innerHTML += htmlItemGanres;

                let htmlData = getHtmlData(movies);

                const item = document.querySelector(`.${fileWithoutExt}_item`);
                item.innerHTML = htmlData;

                const leftArrow = document.querySelector(`.left_arrow_${fileWithoutExt}`);
                const rightArrow = document.querySelector(`.right_arrow_${fileWithoutExt}`);
                leftArrow.addEventListener('click', () => {
                    item.scrollBy({
                        left: -260,
                        behavior: 'smooth'
                    });
                });
            
                rightArrow.addEventListener('click', () => {
                    item.scrollBy({
                        left: 260,
                        behavior: 'smooth'
                    });
                });
            }
        });
    });
}

addGanresSlider();

