const getHtmlData = require('../js/dataToHtml');
const initSlaider = require('../js/slider');
const animationDropList = require('../js/dropDownList');
const fs = require('fs');
const path = require('path');




//fetchTrending.json , указали путь к файлу , распарсили и получили массив результатов
let popularMovies = JSON.parse(fs.readFileSync((path.join(__dirname, '../data/popularMovies.json')), 'utf8')).results;
// визвали функцию для получения html вставки для слайдера, получили строку
let htmlDataTrends = getHtmlData(popularMovies);
// выбрали элемент в который будем вставлять html 
const itemTrends = document.querySelector('.trending_item');

// вставили html
itemTrends.innerHTML = htmlDataTrends;


const leftArrowTrending = document.querySelector('.left_arrow_trending');
const rightArrowTrending = document.querySelector('.right_arrow_trending');

initSlaider(leftArrowTrending, rightArrowTrending, itemTrends);








